import { communityRepository } from "../..";
import Repository from "../../../../shared/repository/repository";
import DeleteCommunityService from "./DeleteCommunityService";

const deleteCommunityService = new DeleteCommunityService(communityRepository);

export default deleteCommunityService;