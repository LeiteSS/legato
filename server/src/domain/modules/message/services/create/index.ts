import { messageRepository } from "../..";
import CreateMessageService from "./CreateMessageService";

const createMessageService = new CreateMessageService(messageRepository);

export default createMessageService;