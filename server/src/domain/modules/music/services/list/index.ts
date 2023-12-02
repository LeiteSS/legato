import { musicRepository } from "../..";
import ListMusicService from "./ListMusicService";

const listMusicService = new ListMusicService(musicRepository);

export default listMusicService;