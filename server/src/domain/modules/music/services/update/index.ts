import { musicRepository } from "../..";
import UpdateMusicService from "./UpdateMusicService";

const updateMusicService = new UpdateMusicService(musicRepository);

export default updateMusicService;