import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import fastifyJwt from 'fastify-jwt'
import fastifyPlugin from 'fastify-plugin'
import config from '~/infrastructure/config/constants'
import { responseSender } from '~/infrastructure/webserver/response.handler'
import parseResponse from '~/infrastructure/webserver/response.parser'

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
