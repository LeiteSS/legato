import { postRepository } from "../..";
import ListPostService from "./ListPostService";

const listPostService = new ListPostService(postRepository);

export default listPostService;