import { postRepository } from "../..";
import DeletePostService from "./DeletePostService";


const deletePostService = new DeletePostService(postRepository);

export default deletePostService;