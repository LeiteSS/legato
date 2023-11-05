import createCommentService from "../../../../../domain/modules/comment/services/create";
import CreateCommentController from "./CreateCommentController";

const createCommentController = new CreateCommentController(createCommentService);

export default createCommentController;