import { transcriptionRepository } from "../..";
import DeleteTranscriptionService from "./DeleteTranscriptionService";

const deleteTranscriptionService = new DeleteTranscriptionService(transcriptionRepository);

export default deleteTranscriptionService;