import updateCommentService from "../../../../../domain/modules/comment/services/update";
import UpdateCommentController from "./UpdateCommentController";

const updateCommentController = new UpdateCommentController(updateCommentService);

export default updateCommentController;