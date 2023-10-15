import { getToken } from '../../../../../config/jwt';
import  Service  from '../../../../shared/interfaces/Service';
import User from '../../User';

export default class GetUserTokenService implements Service<string> {
  public async execute(user: User): Promise<string> {
    return getToken({ user });
  }
}

