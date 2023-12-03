import api from '../../../../service/api';
import { Artist } from '../../../../models/modules/artist/Artist';


async function createArtist(
  artist: Artist,
): Promise<Artist | null> {
  try {
    const response = await api.post('/api/v1/artist', artist);
    console.log(response);
    return response.data as Artist;
  } catch (error) {
    return null;
  }
}

export default createArtist;