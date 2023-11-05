import { User } from "../../../../models/modules/user/User";
import api from "../../../../service/api";

async function getByEmailUser(
  email: string,
): Promise<User | null> {
  try {
    const response = await api.get(`/api/v1/users/${email}`);

    return response.data as User;
  } catch (error) {
    return null;
  }
}

export default getByEmailUser;