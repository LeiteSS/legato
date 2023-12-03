import { Instrument } from "../../../../models/modules/instrument/Instrument";
import api from "../../../../service/api";


async function createInstrument(
  instrument: Instrument,
): Promise<Instrument | null> {
  try {

    const response = await api.post('/Instrument', instrument);

    return response.data as Instrument;
  } catch (error) {
  
    return null;
  }
}

export default createInstrument;