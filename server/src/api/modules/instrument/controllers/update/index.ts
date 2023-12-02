import updateInstrumentService from "../../../../../domain/modules/instrument/services/update";
import UpdateInstrumentController from "./UpdateInstrumentController";

const updateInstrumentController = new UpdateInstrumentController(updateInstrumentService);

export default updateInstrumentController;