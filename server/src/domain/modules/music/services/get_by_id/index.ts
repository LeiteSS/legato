import { musicRepository } from "../..";
import GetByIdMusicService from "./GetByIdMusicService";


const getByIdMusicService = new GetByIdMusicService(musicRepository);

export default getByIdMusicService;