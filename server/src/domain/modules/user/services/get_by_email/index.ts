import { UserRepository } from "../..";
import GetByEmailUserService from "./GetByEmailUserService";

const getByEmailUserService = new GetByEmailUserService(UserRepository);

export default getByEmailUserService;