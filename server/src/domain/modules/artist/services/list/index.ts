import { artistRepository } from "../..";
import ListArtistService from "./ListArtistService";


const listArtistService = new ListArtistService(artistRepository);

export default listArtistService;