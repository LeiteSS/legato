import { UserRepository } from "../..";
import AuthenticateUserService from "./AuthenticateUserService";

const authenticateUserService = new AuthenticateUserService(UserRepository);

export default authenticateUserService;