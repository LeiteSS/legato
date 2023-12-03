import { Community } from "../../../../models/modules/community/Community";
import api from "../../../../service/api";

async function createCommunity(
  community: Community,
): Promise<Community | null> {
  try {
    const response = await api.post('/api/v1/community', community);

    return response.data as Community;
  } catch (error) {

    return null;
  }
}

export default createCommunity;