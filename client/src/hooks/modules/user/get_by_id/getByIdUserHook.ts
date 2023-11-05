import { User } from '../../../../models/modules/user/User';
import api from '../../../../service/api';

async function getByIdUser(
  id: string,
): Promise<User> {
  const response = await api.get(`/api/v1/users/${id}`);

  return response.data as User;
}

export default getByIdUser;