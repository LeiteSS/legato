import { UserRepository } from "../..";
import UpdatePartialUserService from "./UpdatePartialUserService";

const updatePartialUserService = new UpdatePartialUserService(UserRepository);

export default updatePartialUserService;