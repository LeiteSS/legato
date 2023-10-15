import { UserRepository } from "../..";
import CreateUserService from "./CreateUserService";

const createUserService = new CreateUserService(UserRepository);

export default createUserService;