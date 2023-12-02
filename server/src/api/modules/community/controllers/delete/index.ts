import deleteCommentService from "../../../../../domain/modules/comment/services/delete";
import deleteCommunityService from "../../../../../domain/modules/community/services/delete";
import DeleteCommunityController from "./DeleteCommunityController";

const deleteCommunityController = new DeleteCommunityController(deleteCommunityService);

export default deleteCommunityController;