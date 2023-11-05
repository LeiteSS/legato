import deleteArtistService from "../../../../../domain/modules/artist/services/delete";
import DeleteArtistController from "./DeleteArtistController";

const deleteArtistController = new DeleteArtistController(deleteArtistService);

export default deleteArtistController;