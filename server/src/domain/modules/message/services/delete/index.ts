import { messageRepository } from "../..";
import DeleteMessageService from "./DeleteMessageService";

const deleteMessageService = new DeleteMessageService(messageRepository);

export default deleteMessageService;