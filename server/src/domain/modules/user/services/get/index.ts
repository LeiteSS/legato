import { UserRepository } from "../..";
import GetUserService from "./GetUserService";

const getUserService = new GetUserService(UserRepository);

export default getUserService;