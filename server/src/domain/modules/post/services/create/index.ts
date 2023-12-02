import { postRepository } from "../..";
import CreatePostService from "./CreatePostService";

const createPostService = new CreatePostService(postRepository);

export default createPostService;