import { instrumentRepository } from "../..";
import ListInstrumentService from "./ListInstrumentService";

const listInstrumentService = new ListInstrumentService(instrumentRepository);

export default listInstrumentService;