import { transcriptionRepository } from "../..";
import UpdateTranscriptionService from "./UpdateTranscriptionService";

const updateTranscriptionService = new UpdateTranscriptionService(transcriptionRepository);

export default updateTranscriptionService;