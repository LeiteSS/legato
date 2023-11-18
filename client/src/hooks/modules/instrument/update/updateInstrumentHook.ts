import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '../../lib/api';
import exception from '../../lib/errors/axiosError';
import { AlertContextType } from '../../components/advanced/Alert/AlertContext';
import updateInstrumentSchema from './schema/update';
import { Instrument } from './Instrument';
import validate from '@/lib/validate';

export async function updateInstrument(
  id: string,
  Instrument: Instrument,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Instrument | null> {
  try {
    if (!validate(Instrument, alertContext, updateInstrumentSchema)) {
      return null;
    }

    const response = await api.put(`/Instrument/${id}`, Instrument);

    return response.data as Instrument;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default updateInstrument;