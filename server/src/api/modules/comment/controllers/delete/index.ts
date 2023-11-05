import deleteCommentService from "../../../../../domain/modules/comment/services/delete";
import DeleteCommentController from "./DeleteCommentController";

const deleteCommentController = new DeleteCommentController(deleteCommentService);

export default deleteCommentController;