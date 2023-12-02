import createPostService from "../../../../../domain/modules/post/services/create";
import CreatePostController from "./CreatePostController";

const createPostController = new CreatePostController(createPostService);

export default createPostController;