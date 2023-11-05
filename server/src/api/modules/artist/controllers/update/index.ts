import updateArtistService from "../../../../../domain/modules/artist/services/update";
import UpdateArtistController from "./UpdateArtistController";

const updateArtistController = new UpdateArtistController(updateArtistService);

export default updateArtistController;