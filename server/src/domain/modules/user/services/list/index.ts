import { UserRepository } from "../..";
import ListUserService from "./ListUserService";

const listUserService = new ListUserService(UserRepository);

export default listUserService;