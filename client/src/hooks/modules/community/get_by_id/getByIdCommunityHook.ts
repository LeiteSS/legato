import api from "../../../../service/api";
import { Community } from "../../../../models/modules/community/Community";

async function getByIdCommunity(
  id: string,
): Promise<Community | null> {
  try {
    const response = await api.get(`/api/v1/community/${id}`);

    return response.data as Community;
  } catch (error) {

    return null;
  }
}

export default getByIdCommunity;