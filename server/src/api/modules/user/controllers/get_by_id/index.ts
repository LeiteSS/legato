import getByIdUserService from "../../../../../domain/modules/user/services/get_by_id";
import GetByIdUserController from "./GetByIdUserController";

const getByIdUserController = new GetByIdUserController(getByIdUserService);

export default getByIdUserController;