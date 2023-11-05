import { commentRepository } from "../..";
import GetByIdCommentService from "./GetByIdCommentService";

const getByIdCommentService = new GetByIdCommentService(commentRepository);

export default getByIdCommentService;