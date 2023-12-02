import createInstrumentService from "../../../../../domain/modules/instrument/services/create";
import CreateInstrumentController from "./CreateInstrumentController";

const createInstrumentController = new CreateInstrumentController(createInstrumentService);

export default createInstrumentController;