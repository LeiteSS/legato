import deleteMessageService from "../../../../../domain/modules/message/services/delete";
import DeleteMessageController from "./DeleteMessageController";

const deleteMessageController = new DeleteMessageController(deleteMessageService);

export default deleteMessageController;