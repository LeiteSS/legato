import * as yup from "yup"
import { Artist } from "../../../../models/modules/artist/Artist";


const ArtistSchema = yup
  .object<Artist>({
    
name: yup.string().required('Este campo é obrigatorio'),
    
genre: yup.string().required('Este campo é obrigatorio'),
    
followers: yup.string().required('Este campo é obrigatorio'),
    
biography: yup.string().required('Este campo é obrigatorio'),
  })
  .required();

export default ArtistSchema;