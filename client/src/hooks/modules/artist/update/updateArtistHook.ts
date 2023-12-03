import { Artist } from "../../../../models/modules/artist/Artist";
import api from "../../../../service/api";

export async function updateArtist(
  id: string,
  artist: Artist,
): Promise<Artist | null> {
  try {
    const response = await api.put(`/api/v1/artist/${id}`, artist);

    return response.data as Artist;
  } catch (error) {
    return null;
  }
}

export default updateArtist;