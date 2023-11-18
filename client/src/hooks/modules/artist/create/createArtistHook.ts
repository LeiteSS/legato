import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '@/service/api';
import exception from '@/lib/errors/axiosError';
import { AlertContextType } from '@/components/advanced/Alert/AlertContext';
import { Artist } from './Artist';
import validate from '@/lib/validate';

async function createArtist(
  Artist: Artist,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Artist | null> {
  try {
    if (!validate(Artist, alertContext)) {
      return null;
    }

    const response = await api.post('/Artist', Artist);

    return response.data as Artist;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default createArtist;