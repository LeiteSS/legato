import { Community } from "../../../../models/modules/community/Community";
import api from "../../../../service/api";

async function listCommunity(
  page: number,
  pageSize: number,
): Promise<Community[]> {
  try {
    const response = await api.get(`/Community?page=${page}&pageSize=${pageSize}`);

    return response.data as Community[];
  } catch (error) {

    return [];
  }
}

export default listCommunity;