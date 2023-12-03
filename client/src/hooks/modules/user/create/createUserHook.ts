import { User } from '../../../../models/modules/user/User';
import publicApi from '../../../../service/publicApi';

async function createUser(
  user: User,
): Promise<User | null> {
  try {
    const response = await publicApi.post('/api/v1/users', user);
    console.log(response);
    return response.data as User;
  } catch (error) {
    return null;
  }
}

export default createUser;