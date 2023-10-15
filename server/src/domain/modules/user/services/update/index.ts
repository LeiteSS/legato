import { UserRepository } from "../..";
import UpdateUserService from "./UpdateUserService";

const updateUserService = new UpdateUserService(UserRepository);

export default updateUserService;