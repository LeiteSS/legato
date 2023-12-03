import { Music } from "../../../../models/modules/music/Music"
import api from "../../../../service/api";

export async function deleteMusic(
  id: string,
) {
  try {
    const response = await api.delete(`/api/v1/music/${id}`);

    return response.data as Music;
  } catch (error) {

    return null;
  }
}

export default deleteMusic;