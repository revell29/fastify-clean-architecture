import { FastifyReply, FastifyRequest } from 'fastify'
import PasswordHash from '~/application/security/bcrypt'
import { userEntities } from '~/domain/entities/user'
import { ResponseLoginInteface } from '~/domain/interface/response.interface'
import { UserInterface } from '~/domain/interface/users.interface'
import UserRepository from '~/infrastructure/repositories/user.repository'

class AuthController {
  /**
   * @description Login user with email or phone number and password and return token if success
   *
   * @param req: FastifyRequest
   * @param res: FastifyReply
   * @returns {Promise<void>}
   * @memberof AuthController
   */
  static async login(request: FastifyRequest, reply: FastifyReply): Promise<ResponseLoginInteface> {
    try {
      const { email, password } = request.body as UserInterface
      const findUser = await UserRepository.findOne(email)

      if (!findUser) return reply.code(404).send({ message: 'Akun tidak ditemukan.' })

      const isPasswordValid = await PasswordHash.compare(password, findUser.password)
      if (!isPasswordValid) return reply.code(401).send({ message: 'Email atau password salah.' })

      const entities = userEntities(findUser)
      const token = await reply.jwtSign(entities)

      return reply.code(200).send({ messsage: 'Login berhasil.', data: entities, token })
    } catch (error) {
      console.log(error)
      return reply.code(500).send({ message: error.message })
    }
  }
}

export default AuthController
