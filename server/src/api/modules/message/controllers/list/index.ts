import listMessageService from "../../../../../domain/modules/message/services/list";
import ListMessageController from "./ListMessageController";

const listMessageController = new ListMessageController(listMessageService);

export default listMessageController;