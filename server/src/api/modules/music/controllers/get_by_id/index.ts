import getByIdMusicService from "../../../../../domain/modules/music/services/get_by_id";
import GetByIdMusicController from "./GetByIdMusicController";


const getByIdMusicController = new GetByIdMusicController(getByIdMusicService);

export default getByIdMusicController;