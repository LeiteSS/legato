import * as yup from "yup"

import { Music } from "../../../../models/modules/Music/Music"

const MusicSchema = yup
  .object<Music>({
    
title: yup.string().required('Este campo é obrigatorio'),
    
artist: yup.string().required('Este campo é obrigatorio'),
    
date: yup.Date().required('Este campo é obrigatorio'),
    
album: yup.string().required('Este campo é obrigatorio'),
  })
  .required();

export default MusicSchema;