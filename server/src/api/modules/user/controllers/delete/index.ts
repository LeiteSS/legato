import deleteUserService from "../../../../../domain/modules/user/services/delete";
import DeleteUserController from "../delete/DeleteUserController";

const deleteUserController = new DeleteUserController(deleteUserService);

export default deleteUserController;