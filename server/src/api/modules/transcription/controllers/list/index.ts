import listTranscriptionService from "../../../../../domain/modules/transcription/services/list";
import ListTranscriptionController from "./ListTranscriptionController";

const listTranscriptionController = new ListTranscriptionController(listTranscriptionService);

export default listTranscriptionController;