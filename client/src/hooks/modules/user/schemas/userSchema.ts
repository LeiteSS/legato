import * as yup from "yup"

import { User } from "../../../../models/modules/user/User"

const UserSchema = yup
  .object<User>({
    name: yup.string().required('Este campo é obrigatorio'),  
    email: yup.string().required('Este campo é obrigatorio'),
    password: yup.string().required('Este campo é obrigatorio'),
    accountType: yup.string().required('Este campo é obrigatorio'),
    datebirth: yup.date(),
  })
  .required();

export default UserSchema;