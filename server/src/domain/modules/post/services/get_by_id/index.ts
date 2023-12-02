import { postRepository } from "../..";
import GetByIdPostService from "./GetByIdPostService";

const getByIdPostService = new GetByIdPostService(postRepository);

export default getByIdPostService;