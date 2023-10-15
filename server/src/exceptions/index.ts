import BoomError, { Boom } from '@hapi/boom';
import { FastifyPluginCallback, FastifyPluginOptions, FastifyReply } from 'fastify';
import fp from 'fastify-plugin';

declare module 'fastify' {
  interface FastifyReply {
    badRequest: (this: FastifyReply, message?: string) => FastifyReply;
    conflict: (this: FastifyReply, message?: string) => FastifyReply;
    forbidden: (this: FastifyReply, message?: string) => FastifyReply;
    entityTooLarge: (this: FastifyReply, message?: string) => FastifyReply;
    gatewayTimeout: (this: FastifyReply, message?: string) => FastifyReply;
    unauthorized: (
      this: FastifyReply,
      message: string | null,
      scheme: string,
      attributes?: string | BoomError.unauthorized.Attributes
    ) => FastifyReply;
    boomify: (this: FastifyReply, error: Error, message?: string) => FastifyReply;
  }
}

const boomPlugin: FastifyPluginCallback<FastifyPluginOptions> = (fastify, options, done) => {
  fastify.decorateReply('badRequest', function badRequest(this: FastifyReply, message?: string): FastifyReply {
    const boom = BoomError.badRequest(message);
    const { statusCode, payload } = boom.output;
    return this.code(statusCode).send(payload);
  });

  fastify.decorateReply('conflict', function conflict(this: FastifyReply, message?: string) {
    const boom = BoomError.conflict(message);
    const { statusCode, payload } = boom.output;
    return this.code(statusCode).send(payload);
  });

  fastify.decorateReply('forbidden', function forbidden(this: FastifyReply, message?: string) {
    const boom = BoomError.forbidden(message);
    const { statusCode, payload } = boom.output;
    return this.code(statusCode).send(payload);
  });

  fastify.decorateReply('entityTooLarge', function entityTooLarge(this: FastifyReply, message?: string) {
    const boom = BoomError.entityTooLarge(message);
    const { statusCode, payload } = boom.output;
    return this.code(statusCode).send(payload);
  });

  fastify.decorateReply('gatewayTimeout', function gatewayTimeout(this: FastifyReply, message?: string) {
    const boom = BoomError.gatewayTimeout(message);
    const { statusCode, payload } = boom.output;
    return this.code(statusCode).send(payload);
  });

  fastify.decorateReply('unauthorized', function unauthorized(
    this: FastifyReply,
    message: string | null,
    scheme: string,
    attributes?: string | BoomError.unauthorized.Attributes,
  ) {
    const boom = BoomError.unauthorized(message, scheme, attributes);
    const { statusCode, payload } = boom.output;
    return this.code(statusCode).send(payload);
  });

  fastify.decorateReply('boomify', function boomify(this: FastifyReply, error: Error, message?: string) {
    const err = error as Boom;
    if (err?.output) {
      const { statusCode, payload } = err.output;
      return this.code(statusCode).send(payload);
    }

    const boom = BoomError.boomify(err, { message });
    const { statusCode, payload } = boom.output;
    return this.code(statusCode).send(payload);
  });

  done();
};

export default fp(boomPlugin, {
  name: 'boom-plugin',
  fastify: '4.x',
});
