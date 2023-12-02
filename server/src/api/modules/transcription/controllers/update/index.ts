import updateTranscriptionService from "../../../../../domain/modules/transcription/services/update";
import UpdateTranscriptionController from "./UpdateTranscriptionController";

const updateTranscriptionController = new UpdateTranscriptionController(updateTranscriptionService);

export default updateTranscriptionController;