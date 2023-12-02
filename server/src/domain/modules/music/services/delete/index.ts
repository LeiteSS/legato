import { musicRepository } from "../..";
import DeleteMusicService from "./DeleteMusicService";


const deleteMusicService = new DeleteMusicService(musicRepository);

export default deleteMusicService;