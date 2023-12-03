import { Artist } from "../../../../models/modules/artist/Artist";
import api from "../../../../service/api";


async function getByIdArtist(
  id: string,
): Promise<Artist | null> {
  try {
    const response = await api.get(`/api/v1/artist/${id}`);

    return response.data as Artist;
  } catch (error) {
    return null;
  }
}

export default getByIdArtist;