import { transcriptionRepository } from "../..";
import ListTranscriptionService from "./ListTranscriptionService";

const listTranscriptionService = new ListTranscriptionService(transcriptionRepository);

export default listTranscriptionService;