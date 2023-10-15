import getByEmailUserService from "../../../../../domain/modules/user/services/get_by_email";
import GetByEmailUserController from "./GetByEmailUserController";

const getByEmailUserController = new GetByEmailUserController(getByEmailUserService);

export default getByEmailUserController;