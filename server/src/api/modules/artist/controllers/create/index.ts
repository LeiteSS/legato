import createArtistService from "../../../../../domain/modules/artist/services/create";
import CreateArtistController from "./CreateArtistController";

const createArtistController = new CreateArtistController(createArtistService);

export default createArtistController;