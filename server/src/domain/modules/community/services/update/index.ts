import { communityRepository } from "../..";
import UpdateCommunityService from "./UpdateCommunityService";

const updateCommunityService = new UpdateCommunityService(communityRepository);

export default updateCommunityService;