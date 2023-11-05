import { communityRepository } from "../..";
import GetByIdCommunityService from "./GetByIdCommunityService";

const getByIdCommunityService = new GetByIdCommunityService(communityRepository);

export default getByIdCommunityService;