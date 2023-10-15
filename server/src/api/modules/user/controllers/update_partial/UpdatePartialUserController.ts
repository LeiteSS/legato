import { FastifyReply, FastifyRequest } from 'fastify';
import UpdatePartialUserService from '../../../../../domain/modules/user/services/update_partial/UpdatePartialUserService';
import PartialUser from '../../../../../domain/modules/user/services/update_partial/model/PartialUser';

export default class UpdatePartialUserController {
  private service: UpdatePartialUserService;

  constructor(service: UpdatePartialUserService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { id } = request.params as { id: string };
    const partialUser = request.body as PartialUser;

    const updatedUser = await this.service.execute(id, partialUser);

    if (updatedUser ) {
      return reply.code(200).send(updatedUser);
    }

    return reply.badRequest('_id is invalid!');
  }
}

