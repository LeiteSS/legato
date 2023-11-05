import getByIdCommentService from "../../../../../domain/modules/comment/services/get_by_id";
import GetByIdCommentController from "./GetByIdCommentController";

const getByIdCommentController = new GetByIdCommentController(getByIdCommentService);

export default getByIdCommentController;