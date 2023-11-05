import { communityRepository } from "../..";
import ListCommunityService from "./ListCommunityService";

const listCommunityService = new ListCommunityService(communityRepository);

export default listCommunityService;