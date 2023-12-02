import getByIdCommunityService from "../../../../../domain/modules/community/services/get_by_id";
import GetByIdCommunityController from "./GetByIdCommunityController";

const getByIdCommunityController = new GetByIdCommunityController(getByIdCommunityService);

export default getByIdCommunityController;