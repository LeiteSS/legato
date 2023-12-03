import { Instrument } from "../../../../models/modules/instrument/Instrument";
import api from "../../../../service/api";

export async function updateInstrument(
  id: string,
  instrument: Instrument,
): Promise<Instrument | null> {
  try {
    const response = await api.put(`/api/v1/instrument/${id}`, instrument);

    return response.data as Instrument;
  } catch (error) {

    return null;
  }
}

export default updateInstrument;