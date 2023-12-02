import { messageRepository } from "../..";
import UpdateMessageService from "./UpdateMessageService";

const updateMessageService = new UpdateMessageService(messageRepository);

export default updateMessageService;