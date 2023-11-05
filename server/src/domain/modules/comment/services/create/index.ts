import { commentRepository } from "../..";
import CreateCommentService from "./CreateCommentService";

const createCommentService = new CreateCommentService(commentRepository);

export default createCommentService;