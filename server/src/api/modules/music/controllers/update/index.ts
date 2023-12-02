import updateMusicService from "../../../../../domain/modules/music/services/update";
import UpdateMusicController from "./UpdateMusicController";

const updateMusicController = new UpdateMusicController(updateMusicService);

export default updateMusicController;