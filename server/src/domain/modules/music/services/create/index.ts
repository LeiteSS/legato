import { musicRepository } from "../..";
import CreateMusicService from "./CreateMusicService";


const createMusicService = new CreateMusicService(musicRepository);

export default createMusicService;