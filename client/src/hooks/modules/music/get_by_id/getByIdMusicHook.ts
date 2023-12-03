import { Music } from "../../../../models/modules/music/Music"
import api from "../../../../service/api";

async function getByIdMusic(
  id: string,
): Promise<Music | null> {
  try {
    const response = await api.get(`/api/v1/music/${id}`);

    return response.data as Music;
  } catch (error) {
    return null;
  }
}

export default getByIdMusic;