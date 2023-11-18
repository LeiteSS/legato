import * as yup from "yup"

import { Instrument } from "../../../../models/modules/Instrument/Instrument"

const InstrumentSchema = yup
  .object<Instrument>({
    
instrumentName: yup.string().required('Este campo é obrigatorio'),
    
instrumentType: yup.string().required('Este campo é obrigatorio'),
  })
  .required();

export default InstrumentSchema;