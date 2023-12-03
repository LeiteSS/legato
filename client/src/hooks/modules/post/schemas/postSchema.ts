import * as yup from "yup"

import { Post } from "../../../../models/modules/post/Post"

const PostSchema = yup
  .object<Post>({
    
user: yup.string().required('Este campo é obrigatorio'),
    
caption: yup.string().required('Este campo é obrigatorio'),
    
file: yup.object().required('Este campo é obrigatorio'),
    
comments: yup.object().required('Este campo é obrigatorio'),
    
likes: yup.number().required('Este campo é obrigatorio'),
    
reactions: yup.string().required('Este campo é obrigatorio'),
  })
  .required();

export default PostSchema;