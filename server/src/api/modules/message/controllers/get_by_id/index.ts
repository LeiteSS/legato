import getByIdMessageService from "../../../../../domain/modules/message/services/get_by_id";
import GetByIdMessageController from "./GetByIdMessageController";

const getByIdMessageController = new GetByIdMessageController(getByIdMessageService);

export default getByIdMessageController;