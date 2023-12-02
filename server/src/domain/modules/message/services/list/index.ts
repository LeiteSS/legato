import { messageRepository } from "../..";
import ListMessageService from "./ListMessageService";

const listMessageService = new ListMessageService(messageRepository);

export default listMessageService;