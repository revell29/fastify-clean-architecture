import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import AuthController from '../controller/auth/auth.controller'
import { UserInterface } from '~/domain/interface/users.interface'
import { LoginSchema } from '~/domain/validation/auth.validate'

class AuthRoute {
  public prefix_route = '/auth'

  async routes(fastify: FastifyInstance, _options: FastifyPluginOptions, _done: any) {
    fastify.post<{ Body: UserInterface }>(
      '/login',
      {
        schema: {
          body: LoginSchema,
        },
      },
      AuthController.login,
    )
  }
}

export default AuthRoute
