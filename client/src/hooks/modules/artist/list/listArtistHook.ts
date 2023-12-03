import { Artist } from "../../../../models/modules/artist/Artist";
import api from "../../../../service/api";


async function listArtist(
  page: number,
  pageSize: number,
): Promise<Artist[]> {
  try {
    const response = await api.get(`/api/v1/artist?page=${page}&pageSize=${pageSize}`);

    return response.data as Artist[];
  } catch (error) {
    return [];
  }
}

export default listArtist;