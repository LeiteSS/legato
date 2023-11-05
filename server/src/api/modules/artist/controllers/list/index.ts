import listArtistService from "../../../../../domain/modules/artist/services/list";
import ListArtistController from "./ListArtistController";

const listArtistController = new ListArtistController(listArtistService);

export default listArtistController;