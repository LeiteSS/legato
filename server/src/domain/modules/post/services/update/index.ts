import { postRepository } from "../..";
import UpdatePostService from "./UpdatePostService";

const updatePostService = new UpdatePostService(postRepository);

export default updatePostService;