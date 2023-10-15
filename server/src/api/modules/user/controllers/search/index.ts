import searchUserService from "../../../../../domain/modules/user/services/search";
import SearchUserController from "./SearchUserController";

const searchUserController = new SearchUserController(searchUserService);

export default searchUserController;