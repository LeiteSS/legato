import { FastifyReply, FastifyRequest } from 'fastify';
import GetByEmailUserService from '../../../../../domain/modules/user/services/get_by_email/GetByEmailUserService';

export default class GetByEmailUserController {
  private service: GetByEmailUserService;

  constructor(service: GetByEmailUserService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { email } = request.params as { email: string };
    
    const user = await this.service.execute(email);

    if (user) {
      return reply.code(200).send(user);
    }

    return reply.badRequest('Invalid email!');
  }
}

