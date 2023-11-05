import getByIdArtistService from "../../../../../domain/modules/artist/services/get_by_id";
import GetByIdArtistController from "./GetByIdArtistController";

const getByIdArtistController = new GetByIdArtistController(getByIdArtistService);

export default getByIdArtistController;