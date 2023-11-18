import * as yup from "yup"

import { Comment } from "../../../../models/modules/comment/Comment";

const CommentSchema = yup
  .object<Comment>({
    
  user: yup.string().required('Este campo é obrigatorio'),
    
  content: yup.string().required('Este campo é obrigatorio'),
    
  replies: yup.string().required('Este campo é obrigatorio'),
  })
  .required();

export default CommentSchema;