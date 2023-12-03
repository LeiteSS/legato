import { User } from '../../../../models/modules/user/User';
import publicApi from '../../../../service/publicApi';

async function authenticateUser(
  email: string,
  password: string,
): Promise<User | null> {
  try {
    const response = await publicApi.post('/api/v1/users/login', { email, password });

    return response.data as User;
  } catch (error) {

    return null;
  }
}

export default authenticateUser;