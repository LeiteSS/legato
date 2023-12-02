import deletePostService from "../../../../../domain/modules/post/services/delete";
import DeletePostController from "./DeletePostController";

const deletePostController = new DeletePostController(deletePostService);

export default deletePostController;