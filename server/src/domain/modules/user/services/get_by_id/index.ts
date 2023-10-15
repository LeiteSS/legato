import { UserRepository } from "../..";
import GetByIdUserService from "./GetByIdUserService";

const getByIdUserService = new GetByIdUserService(UserRepository);

export default getByIdUserService;