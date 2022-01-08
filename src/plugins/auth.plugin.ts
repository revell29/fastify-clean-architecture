import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import fastifyJwt from 'fastify-jwt'
import fastifyPlugin from 'fastify-plugin'
import { responseSender } from '~/helpers/response.handler'
import parseResponse from '~/helpers/response.parser'
import config from '~/infrastructure/config/config'

export default fastifyPlugin<FastifyInstance>(
  async (fastify) => {
    fastify.register(fastifyJwt, {
      secret: config.jwt.secret,
    })

    fastify.decorate('authenticate', async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        await req.jwtVerify()
      } catch (err) {
        responseSender(parseResponse(new Error(`${err.statusCode}: Unauthorize, ${err.message}`)), reply)
      }
    })
  },
  {
    name: 'auth-middleware',
  },
)

declare module 'fastify' {
  export interface FastifyInstance {
    authenticate(): void
  }
}

declare module 'fastify' {
  export interface FastifyInstance {
    authenticate(): void
  }
}
