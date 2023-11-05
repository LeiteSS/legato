import { artistRepository } from "../..";
import UpdateArtistService from "./UpdateArtistService";

const updateArtistService = new UpdateArtistService(artistRepository);

export default updateArtistService;