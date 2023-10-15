import { UserRepository } from "../..";
import DeleteUserService from "./DeleteUserService";

const deleteUserService = new DeleteUserService(UserRepository);

export default deleteUserService;