import { instrumentRepository } from "../..";
import GetByIdInstrumentService from "./GetByIdInstrumentService";

const getByIdInstrumentService = new GetByIdInstrumentService(instrumentRepository);

export default getByIdInstrumentService;