import { UserRepository } from "../..";
import SearchUserService from "./SearchUserService";

const searchUserService = new SearchUserService(UserRepository);

export default searchUserService;