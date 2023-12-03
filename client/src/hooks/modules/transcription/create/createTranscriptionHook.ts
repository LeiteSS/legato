import { Transcription } from "../../../../models/modules/transcription/Transcription"
import api from "../../../../service/api";

async function createTranscription(
  transcription: Transcription,

): Promise<Transcription | null> {
  try {
    const response = await api.post('/Transcription', transcription);

    return response.data as Transcription;
  } catch (error) {

    return null;
  }
}

export default createTranscription;