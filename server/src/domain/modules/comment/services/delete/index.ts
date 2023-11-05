import { commentRepository } from "../..";

import DeleteCommentService from "./DeleteCommentService";

const deleteCommentService = new DeleteCommentService(commentRepository);

export default deleteCommentService;