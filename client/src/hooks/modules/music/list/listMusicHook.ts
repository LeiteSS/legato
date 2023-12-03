import { Music } from "../../../../models/modules/music/Music"
import api from "../../../../service/api";

async function listMusic(
  page: number,
  pageSize: number,
): Promise<Music[]> {
  try {
    const response = await api.get(`/api/v1/music?page=${page}&pageSize=${pageSize}`);

    return response.data as Music[];
  } catch (error) {
    return [];
  }
}

export default listMusic;