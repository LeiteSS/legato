import { artistRepository } from "../..";
import DeleteArtistService from "./DeleteArtistService";


const deleteArtistService = new DeleteArtistService(artistRepository);

export default deleteArtistService;