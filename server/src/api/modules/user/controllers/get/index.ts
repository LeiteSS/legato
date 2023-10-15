import getUserService from "../../../../../domain/modules/user/services/get";
import GetUserController from "./GetUserController";

const getUserController = new GetUserController(getUserService);

export default getUserController;