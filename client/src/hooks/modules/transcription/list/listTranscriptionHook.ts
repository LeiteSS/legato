import { Transcription } from "../../../../models/modules/transcription/Transcription"
import api from "../../../../service/api";

async function listTranscription(
  page: number,
  pageSize: number,
): Promise<Transcription[]> {
  try {
    const response = await api.get(`/api/v1/transcription?page=${page}&pageSize=${pageSize}`);

    return response.data as Transcription[];
  } catch (error) {

    return [];
  }
}

export default listTranscription;