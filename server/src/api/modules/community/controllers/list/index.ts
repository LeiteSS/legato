import listCommunityService from "../../../../../domain/modules/community/services/list";
import ListCommunityController from "./ListCommunityController";

const listCommunityController = new ListCommunityController(listCommunityService);

export default listCommunityController;