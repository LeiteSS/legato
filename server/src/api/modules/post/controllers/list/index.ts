import listPostService from "../../../../../domain/modules/post/services/list";
import ListPostController from "./ListPostController";

const listPostController = new ListPostController(listPostService);

export default listPostController;