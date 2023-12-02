import listInstrumentService from "../../../../../domain/modules/instrument/services/list";
import ListInstrumentController from "./ListInstrumentController";

const listInstrumentController = new ListInstrumentController(listInstrumentService);

export default listInstrumentController;