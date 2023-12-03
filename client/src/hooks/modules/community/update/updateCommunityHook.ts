import { Community } from "../../../../models/modules/community/Community";
import api from "../../../../service/api";

export async function updateCommunity(
  id: string,
  community: Community,

): Promise<Community | null> {
  try {
    const response = await api.put(`/api/v1/community/${id}`, community);

    return response.data as Community;
  } catch (error) {

    return null;
  }
}

export default updateCommunity;