import fp from 'fastify-plugin'
import { type FastifyPluginAsync } from 'fastify'
import fastifySwagger, { type FastifyDynamicSwaggerOptions } from '@fastify/swagger'
import fastifySwaggerUi, { type FastifySwaggerUiOptions } from '@fastify/swagger-ui'

const swaggerConfig: FastifyPluginAsync = async (server) => {
  const openApiOptions: FastifyDynamicSwaggerOptions = {
    openapi: {
      info: {
        title: 'Legato: plataforma para compartilhamento de tablaturas',
        description: 'REST API desenvolvida em Fastify e NodeJS para o projeto interdisciplinar do 4º Semestre',
        version: '1.0.0'
      },
      components: {
        securitySchemes: {
          Authorization: {
            type: 'http',
            scheme: 'bearer'
          }
        }
      }
    },
    hideUntagged: true
  }

  await server.register(fastifySwagger, openApiOptions)

  const openApiUiOptions: FastifySwaggerUiOptions = {
    routePrefix: '/docs',
    initOAuth: {},
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next()
      },
      preHandler: function (request, reply, next) {
        next()
      }
    },
    staticCSP: true,
    transformStaticCSP: (header) => header
  }

  await server.register(fastifySwaggerUi, openApiUiOptions)
}

export default fp(swaggerConfig)