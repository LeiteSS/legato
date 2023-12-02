import createMusicService from "../../../../../domain/modules/music/services/create";
import CreateMusicController from "./CreateMusicController";


const createMusicController = new CreateMusicController(createMusicService);

export default createMusicController;