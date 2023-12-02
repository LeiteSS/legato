import deleteMusicService from "../../../../../domain/modules/music/services/delete";
import DeleteMusicController from "./DeleteMusicController";


const deleteMusicController = new DeleteMusicController(deleteMusicService);

export default deleteMusicController;