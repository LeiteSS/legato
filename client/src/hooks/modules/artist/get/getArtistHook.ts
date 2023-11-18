import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '@/service/api';
import exception from '@/lib/errors/axiosError';
import { AlertContextType } from '@/components/advanced/Alert/AlertContext';
import { Artist } from './Artist';

async function getByIdArtist(
  id: string,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<User | null> {
  try {
    const response = await api.get(`/Artist/${id}`);

    return response.data as Artist;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default getByIdArtist;