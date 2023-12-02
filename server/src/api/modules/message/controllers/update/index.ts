import updateMessageService from "../../../../../domain/modules/message/services/update";
import UpdateMessageController from "./UpdateMessageController";


const updateMessageController = new UpdateMessageController(updateMessageService);

export default updateMessageController;