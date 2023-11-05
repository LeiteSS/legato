import { User } from "../../../../models/modules/user/User";
import api from "../../../../service/api";

export async function deleteUser(
  id: string,
) {
  try {
    const response = await api.delete(`/api/v1/users/${id}`);

    return response.data as User;
  } catch (error) {
    return null;
  }
}

export default deleteUser;