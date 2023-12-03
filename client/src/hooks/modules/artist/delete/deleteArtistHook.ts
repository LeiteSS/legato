import { Artist } from "../../../../models/modules/artist/Artist";
import api from "../../../../service/api";

export async function deleteArtist(
  id: string,
) {
  try {
    const response = await api.delete(`/api/v1/artist/${id}`);
    console.log(response);
    return response.data as Artist;
  } catch (error) {

    return null;
  }
}

export default deleteArtist;