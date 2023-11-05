import { artistRepository } from "../..";
import GetByIdArtistService from "./GetByIdArtistService";


const getByIdArtistService = new GetByIdArtistService(artistRepository);

export default getByIdArtistService;