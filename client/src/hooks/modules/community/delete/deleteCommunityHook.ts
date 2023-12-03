import api from "../../../../service/api";
import { Community } from "../../../../models/modules/community/Community";

export async function deleteCommunity(
  id: string,
) {
  try {
    const response = await api.delete(`/api/v1/community/${id}`);

    return response.data as Community;
  } catch (error) {

    return null;
  }
}

export default deleteCommunity;