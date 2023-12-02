import path from 'path';
import cors from '@fastify/cors';
import fastifyMultipart from '@fastify/multipart';
import fastifyStatic from '@fastify/static';
import fastifyHeathCheck from 'fastify-healthcheck';
import fastify, {
  FastifyError, FastifyInstance, FastifyReply, FastifyRequest,
} from 'fastify';
import { env } from './config/environment';
import { loggerError } from './config/logger';
import fastifyBoom from './exceptions';
import swaggerDocs from './config/swaggerDocs';
import publicRoutes from './api/routes/publicRoutes';
import privateRoutes from './api/routes/privateRoutes';
const SerialPort = require('serialport');

async function serverBuild(): Promise<FastifyInstance> {
  const server = fastify({
    logger: env === 'development',
  });

  server.register(fastifyStatic, {
    root: path.join(__dirname, 'public'),
    prefix: '/',
  });

  const fileSize20mb = 20971520;
  server.register(fastifyMultipart, {
    attachFieldsToBody: true,
    limits: {
      fileSize: fileSize20mb,
    },
  });

  server.register(fastifyBoom);
  server.register(
    fastifyHeathCheck,
    { 
      healthcheckUrl: '/health', 
      exposeUptime: true 
    }
  );

  server.register(cors, {
    origin: true,
    credentials: true,
  });

  server.setValidatorCompiler(({ schema }: {
    schema: any
  }) => (data: any) => schema.validate(data));

  server.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    if (error.statusCode === 400) {
      return reply.badRequest(error.message);
    }

    if (error.statusCode === 413) {
      return reply.entityTooLarge(error.message);
    }

    loggerError.error(error);
    return reply.code(500).send(error);
  });

  server.register(swaggerDocs);
  server.register(publicRoutes, { prefix: '/api/v1/' });
  server.register(privateRoutes, { prefix: '/api/v1/' });

  // Endpoint to execute Arduino code
  server.get('/api/arduino/execute', async (request, reply) => {
    const port = new SerialPort('/dev/ttyUSB0', { baudRate: 9600 });
    port.write('YourDataToSend');

    // Handle Arduino response if needed

    reply.send({ success: true });
  });

  server.post('/api/arduino/data', async (request, reply) => {
    try {
      const dataFromArduino = request.body; // Assumindo que os dados são enviados no corpo da solicitação
      console.log('Data from Arduino:', dataFromArduino);
      
      // Aqui você pode adicionar lógica adicional conforme necessário
  
      reply.send({ success: true });
    } catch (error) {
      console.error('Error processing data from Arduino:', error);
      reply.code(500).send({ error: 'Error processing data from Arduino' });
    }
  });

  return server;
}

export default serverBuild;
