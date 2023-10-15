import authenticateUserService from "../../../../../domain/modules/user/services/authenticate";
import getTokenUserService from "../../../../../domain/modules/user/services/get_token";
import AuthenticateUserController from "./AuthenticateUserController";

const authenticateUserController = new AuthenticateUserController(getTokenUserService, authenticateUserService);

export default authenticateUserController;