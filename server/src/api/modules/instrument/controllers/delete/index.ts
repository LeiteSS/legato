import deleteInstrumentService from "../../../../../domain/modules/instrument/services/delete";
import DeleteInstrumentController from "./DeleteInstrumentController";

const deleteInstrumentController = new DeleteInstrumentController(deleteInstrumentService);

export default deleteInstrumentController;