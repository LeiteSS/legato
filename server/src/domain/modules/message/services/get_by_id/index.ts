import { messageRepository } from "../..";
import GetByIdMessageService from "./GetByIdMessageService";


const getByIdMessageService = new GetByIdMessageService(messageRepository);

export default getByIdMessageService;