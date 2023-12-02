import getByIdInstrumentService from "../../../../../domain/modules/instrument/services/get_by_id";
import GetByIdInstrumentController from "./GetByIdInstrumentController";

const getByIdInstrumentController = new GetByIdInstrumentController(getByIdInstrumentService);

export default getByIdInstrumentController;