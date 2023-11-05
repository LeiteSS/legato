import { instrumentRepository } from "../..";
import DeleteInstrumentService from "./DeleteInstrumentService";

const deleteInstrumentService = new DeleteInstrumentService(instrumentRepository);

export default deleteInstrumentService;