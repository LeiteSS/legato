import createMessageService from "../../../../../domain/modules/message/services/create";
import CreateMessageController from "./CreateMessageController";

const createMessageController = new CreateMessageController(createMessageService);

export default createMessageController;