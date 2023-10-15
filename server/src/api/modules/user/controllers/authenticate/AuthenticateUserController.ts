import { FastifyReply, FastifyRequest } from 'fastify';
import User from '../../../../../domain/modules/user/User';
import AuthenticateUserService from '../../../../../domain/modules/user/services/authenticate/AuthenticateUserService';
import GetUserTokenService from '../../../../../domain/modules/user/services/get_token/GetTokenUserService';

export default class AuthenticateUserController {
  private authenticateUserService: AuthenticateUserService;
  
  private getUserTokenService: GetUserTokenService;

  constructor(
    getUserTokenService: GetUserTokenService,
    authenticateUserService: AuthenticateUserService
  ) {
    this.getUserTokenService = getUserTokenService;
    this.authenticateUserService = authenticateUserService;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const user = request.body as User;
    const authenticatedUser = await this.authenticateUserService.execute(user.email);

    if (authenticatedUser) {
      const token = await this.getUserTokenService.execute(authenticatedUser);
      return reply.code(200).send({ ...authenticatedUser, token });
    }

    return reply.badRequest('Invalid Login');
  }
}

