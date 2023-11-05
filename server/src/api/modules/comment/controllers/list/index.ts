import listCommentService from "../../../../../domain/modules/comment/services/list";
import ListCommentController from "./ListCommentController";

const listCommentController = new ListCommentController(listCommentService);

export default listCommentController;