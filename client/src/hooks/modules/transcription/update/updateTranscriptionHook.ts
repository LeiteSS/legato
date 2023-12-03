import { Transcription } from "../../../../models/modules/transcription/Transcription"
import api from "../../../../service/api";

export async function updateTranscription(
  id: string,
  transcription: Transcription,
): Promise<Transcription | null> {
  try {
    const response = await api.put(`/api/v1/transcription/${id}`, transcription);

    return response.data as Transcription;
  } catch (error) {

    return null;
  }
}

export default updateTranscription;