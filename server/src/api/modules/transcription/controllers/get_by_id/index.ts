import getByIdTranscriptionService from "../../../../../domain/modules/transcription/services/get_by_id";
import GetByIdTranscriptionController from "./GetByIdTranscriptionController";


const getByIdTranscriptionController = new GetByIdTranscriptionController(getByIdTranscriptionService);

export default getByIdTranscriptionController;