import { FastifyReply, FastifyRequest } from 'fastify';
import ListUserService from '../../../../../domain/modules/user/services/list/ListUserService';

export default class ListUserController {
  private service: ListUserService;

  constructor(service: ListUserService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { page, pageSize } = request.query as { page: number, pageSize: number };
    const foundedUsers = await this.service.execute(
      [{ $match: {} }],
      page,
      pageSize,
    );

    if (foundedUsers) {
      return reply.code(200).send(foundedUsers);
    }

    return reply.badRequest('Invalid _id');
  }
}

