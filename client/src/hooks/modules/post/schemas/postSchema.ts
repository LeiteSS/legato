import * as yup from "yup"

import { Post } from "../../../../models/modules/Post/Post"

const PostSchema = yup
  .object<Post>({
    
user: yup.string().required('Este campo é obrigatorio'),
    
caption: yup.string().required('Este campo é obrigatorio'),
    
file: yup.File().required('Este campo é obrigatorio'),
    
comments: yup.Comment[]().required('Este campo é obrigatorio'),
    
likes: yup.number().required('Este campo é obrigatorio'),
    
reactions: yup.string[]().required('Este campo é obrigatorio'),
  })
  .required();

export default PostSchema;