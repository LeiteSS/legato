import { Music } from "../../../../models/modules/music/Music"
import api from "../../../../service/api";

async function createMusic(
  music: Music,
): Promise<Music | null> {
  try {
    const response = await api.post('/api/v1/music', music);

    return response.data as Music;
  } catch (error) {
 
    return null;
  }
}

export default createMusic;