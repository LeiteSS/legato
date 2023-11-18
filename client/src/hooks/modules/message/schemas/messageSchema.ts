import * as yup from "yup"

import { Message } from "../../../../models/modules/Message/Message"

const MessageSchema = yup
  .object<Message>({
    
destination: yup.string().required('Este campo é obrigatorio'),
    
source: yup.string().required('Este campo é obrigatorio'),
    
content: yup.string[]().required('Este campo é obrigatorio'),
  })
  .required();

export default MessageSchema;