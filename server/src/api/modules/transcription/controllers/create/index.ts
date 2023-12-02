import createTranscriptionService from "../../../../../domain/modules/transcription/services/create";
import CreateTranscriptionController from "./CreateTranscriptionController";

const createTranscriptionController = new CreateTranscriptionController(createTranscriptionService);

export default createTranscriptionController;