import { Music } from "../../../../models/modules/music/Music"
import api from "../../../../service/api";

export async function updateMusic(
  id: string,
  music: Music,
): Promise<Music | null> {
  try {
    const response = await api.put(`/api/v1/music/${id}`, music);

    return response.data as Music;
  } catch (error) {
   
    return null;
  }
}

export default updateMusic;