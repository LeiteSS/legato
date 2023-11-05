import { commentRepository } from "../..";
import ListCommentService from "./ListCommentService";

const listCommentService = new ListCommentService(commentRepository);

export default listCommentService;