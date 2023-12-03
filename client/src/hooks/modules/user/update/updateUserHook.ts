import { User } from "../../../../models/modules/user/User";
import api from "../../../../service/api";

export async function updateUser(
  id: string,
  user: User,
): Promise<User | null> {
  try {
    const response = await api.put(`/api/v1/user/${id}`, user);

    return response.data as User;
  } catch (error) {
    return null;
  }
}

export default updateUser;