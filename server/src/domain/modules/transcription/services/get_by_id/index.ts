import { transcriptionRepository } from "../..";
import GetByIdTranscriptionService from "./GetByIdTranscriptionService";

const getByIdTranscriptionService = new GetByIdTranscriptionService(transcriptionRepository);

export default getByIdTranscriptionService;