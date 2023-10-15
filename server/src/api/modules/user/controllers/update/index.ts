import updateUserService from "../../../../../domain/modules/user/services/update";
import UpdateUserController from "./UpdateUserController";

const updateUserController = new UpdateUserController(updateUserService);

export default updateUserController;