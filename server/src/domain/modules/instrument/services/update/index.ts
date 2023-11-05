import { instrumentRepository } from "../..";
import UpdateInstrumentService from "./UpdateInstrumentService";


const updateInstrumentService = new UpdateInstrumentService(instrumentRepository);

export default updateInstrumentService;