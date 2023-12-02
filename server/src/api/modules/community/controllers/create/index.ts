import createCommunityService from "../../../../../domain/modules/community/services/create";
import CreateCommunityController from "./CreateCommunityController";

const createCommunityController = new CreateCommunityController(createCommunityService);

export default createCommunityController;