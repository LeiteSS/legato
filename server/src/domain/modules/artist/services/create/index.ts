import { artistRepository } from "../..";
import CreateArtistService from "./CreateArtistService";


const createArtistService = new CreateArtistService(artistRepository);

export default createArtistService;