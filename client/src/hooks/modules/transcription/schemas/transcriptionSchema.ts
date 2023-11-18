import * as yup from "yup"

import { Transcription } from "../../../../models/modules/Transcription/Transcription"

const TranscriptionSchema = yup
  .object<Transcription>({
    
titleMusic: yup.genre().required('Este campo é obrigatorio'),
    
file: yup.File().required('Este campo é obrigatorio'),
    
genre: yup.string().required('Este campo é obrigatorio'),
    
difficult: yup.string().required('Este campo é obrigatorio'),
    
instrument: yup.string().required('Este campo é obrigatorio'),
  })
  .required();

export default TranscriptionSchema;