import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '@/service/api';
import exception from '@/lib/errors/axiosError';
import { AlertContextType } from '@/components/advanced/Alert/AlertContext';
import { Instrument } from './Instrument';

async function getByIdInstrument(
  id: string,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<User | null> {
  try {
    const response = await api.get(`/Instrument/${id}`);

    return response.data as Instrument;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default getByIdInstrument;