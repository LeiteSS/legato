import { commentRepository } from "../../../comment";
import CreateCommunityService from "./CreateCommunityService";


const createCommunityService = new CreateCommunityService(commentRepository);

export default createCommunityService;