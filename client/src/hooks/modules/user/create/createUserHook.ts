import { User } from '../../../../models/modules/user/User';
import api from '../../../../service/api';

async function createUser(
  user: User,
): Promise<User | null> {
  try {
    const response = await api.post('/api/v1/users', user);
    console.log(response);
    return response.data as User;
  } catch (error) {
    return null;
  }
}

export default createUser;