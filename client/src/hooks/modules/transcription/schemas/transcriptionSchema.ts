import * as yup from "yup"

import { Transcription } from "../../../../models/modules/transcription/Transcription"

const TranscriptionSchema = yup
  .object<Transcription>({
    
titleMusic: yup.string().required('Este campo é obrigatorio'),
    
file: yup.object().required('Este campo é obrigatorio'),
    
genre: yup.string().required('Este campo é obrigatorio'),
    
difficult: yup.string().required('Este campo é obrigatorio'),
    
instrument: yup.string().required('Este campo é obrigatorio'),
  })
  .required();

export default TranscriptionSchema;