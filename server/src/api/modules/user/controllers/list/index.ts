import listUserService from "../../../../../domain/modules/user/services/list";
import ListUserController from "./ListUserController";

const listUserController = new ListUserController(listUserService);

export default listUserController;