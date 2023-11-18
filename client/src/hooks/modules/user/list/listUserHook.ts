import { User } from '../../../../models/modules/user/User';
import api from '../../../../service/api';

async function listUser(
  page: number,
  pageSize: number,
): Promise<User[]> {
  try {
    const response = await api.get(`/api/v1/users/all`);
    return response.data as User[];
  } catch (error) {
    return [];
  }
}

export default listUser;