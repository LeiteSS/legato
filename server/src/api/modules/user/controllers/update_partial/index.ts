import updatePartialUserService from "../../../../../domain/modules/user/services/update_partial";
import UpdatePartialUserController from "./UpdatePartialUserController";

const updatePartialUserController = new UpdatePartialUserController(updatePartialUserService);

export default updatePartialUserController;