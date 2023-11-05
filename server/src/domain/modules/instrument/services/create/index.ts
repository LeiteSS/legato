import { instrumentRepository } from "../..";
import CreateInstrumentService from "./CreateInstrumentService";

const createInstrumentService = new CreateInstrumentService(instrumentRepository);

export default createInstrumentService;