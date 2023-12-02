import listMusicService from "../../../../../domain/modules/music/services/list";
import ListMusicController from "./ListMusicController";


const listMusicController = new ListMusicController(listMusicService);

export default listMusicController;