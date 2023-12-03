import { Transcription } from "../../../../models/modules/transcription/Transcription"
import api from "../../../../service/api";

async function getByIdTranscription(
  id: string,
): Promise<Transcription | null> {
  try {
    const response = await api.get(`/api/v1/transcription/${id}`);

    return response.data as Transcription;
  } catch (error) {

    return null;
  }
}

export default getByIdTranscription;