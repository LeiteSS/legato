import getByIdPostService from "../../../../../domain/modules/post/services/get_by_id";
import GetByIdPostController from "./GetByIdPostController";


const getByIdPostController = new GetByIdPostController(getByIdPostService);

export default getByIdPostController;