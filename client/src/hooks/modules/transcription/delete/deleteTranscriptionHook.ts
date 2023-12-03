import { Transcription } from "../../../../models/modules/transcription/Transcription"
import api from "../../../../service/api";

export async function deleteTranscription(
  id: string,
) {
  try {
    const response = await api.delete(`/api/v1/transcription/${id}`);

    return response.data as Transcription;
  } catch (error) {

    return null;
  }
}

export default deleteTranscription;