import { Instrument } from "../../../../models/modules/instrument/Instrument";
import api from "../../../../service/api";

async function getByIdInstrument(
  id: string,
): Promise<Instrument | null> {
  try {
    const response = await api.get(`/api/v1/instrument/${id}`);

    return response.data as Instrument;
  } catch (error) {

    return null;
  }
}

export default getByIdInstrument;