import { FastifyReply, FastifyRequest } from 'fastify'
import { VerifyUser } from '~/application/use_cases/auth/verify-user'
import { ResponseLoginInteface } from '~/domain/interface/response.interface'
import { UserInterface } from '~/domain/interface/users.interface'

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
      const user = await VerifyUser(email, password)
      const token = await reply.jwtSign(user)
      return reply.code(200).send({ messsage: 'Login berhasil.', data: user, token })
    } catch (error) {
      return reply.code(500).send({ message: error.message })
    }
  }
}

export default AuthController
