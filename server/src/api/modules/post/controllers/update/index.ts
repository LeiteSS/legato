import updatePostService from "../../../../../domain/modules/post/services/update";
import UpdatePostController from "./UpdatePostController";

const updatePostController = new UpdatePostController(updatePostService);

export default updatePostController;