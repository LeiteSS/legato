import updateCommunityService from "../../../../../domain/modules/community/services/update";
import UpdateCommunityController from "./UpdateCommunityController";

const updateCommunityController = new UpdateCommunityController(updateCommunityService);

export default updateCommunityController;