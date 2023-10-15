import createUserService from "../../../../../domain/modules/user/services/create";
import CreateUserController from "./CreateUserController";

const createUserController = new CreateUserController(createUserService);

export default createUserController;