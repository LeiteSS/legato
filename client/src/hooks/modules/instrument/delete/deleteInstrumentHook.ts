import { Instrument } from "../../../../models/modules/instrument/Instrument";
import api from "../../../../service/api";

export async function deleteInstrument(
  id: string,
) {
  try {
    const response = await api.delete(`/api/v1/instrument/${id}`);

    return response.data as Instrument;
  } catch (error) {

    return null;
  }
}

export default deleteInstrument;