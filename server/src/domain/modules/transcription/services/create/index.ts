import { transcriptionRepository } from "../..";
import CreateTranscriptionService from "./CreateTranscriptionService";

const createTranscriptionService = new CreateTranscriptionService(transcriptionRepository);

export default createTranscriptionService;