import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '@/service/api';
import exception from '@/lib/errors/axiosError';
import { AlertContextType } from '@/components/advanced/Alert/AlertContext';
import { Instrument } from './Instrument';
import validate from '@/lib/validate';

async function createInstrument(
  Instrument: Instrument,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Instrument | null> {
  try {
    if (!validate(Instrument, alertContext)) {
      return null;
    }

    const response = await api.post('/Instrument', Instrument);

    return response.data as Instrument;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default createInstrument;