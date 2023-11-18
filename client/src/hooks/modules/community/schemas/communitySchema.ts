import * as yup from "yup"

import { Community } from "../../../../models/modules/community/Community";

const CommunitySchema = yup
  .object<Community>({
    
  name: yup.string().required('Este campo é obrigatorio'),
    
  description: yup.string().required('Este campo é obrigatorio'),
    
  topic: yup.string().required('Este campo é obrigatorio'),
    
  rules: yup.string().required('Este campo é obrigatorio'),
    
  users: yup.string().required('Este campo é obrigatorio'),
  })
  .required();

export default CommunitySchema;