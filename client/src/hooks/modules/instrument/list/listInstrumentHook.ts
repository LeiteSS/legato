import { Instrument } from "../../../../models/modules/instrument/Instrument";
import api from "../../../../service/api";

async function listInstrument(
  page: number,
  pageSize: number,
): Promise<Instrument[]> {
  try {
    const response = await api.get(`/api/v1/instrument?page=${page}&pageSize=${pageSize}`);

    return response.data as Instrument[];
  } catch (error) {

    return [];
  }
}

export default listInstrument;