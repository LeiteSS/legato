import deleteTranscriptionService from "../../../../../domain/modules/transcription/services/delete";
import DeleteTranscriptionController from "./DeleteTranscriptionController";

const deleteTranscriptionController = new DeleteTranscriptionController(deleteTranscriptionService);

export default deleteTranscriptionController;