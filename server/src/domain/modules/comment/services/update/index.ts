import { commentRepository } from "../..";
import UpdateCommentService from "./UpdateCommentService";

const updateCommentService = new UpdateCommentService(commentRepository);

export default updateCommentService;