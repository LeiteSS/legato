import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '../../lib/api';
import exception from '../../lib/errors/axiosError';
import { AlertContextType } from '../../components/advanced/Alert/AlertContext';
import updateArtistSchema from './schema/update';
import { Artist } from './Artist';
import validate from '@/lib/validate';

export async function updateArtist(
  id: string,
  Artist: Artist,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Artist | null> {
  try {
    if (!validate(Artist, alertContext, updateArtistSchema)) {
      return null;
    }

    const response = await api.put(`/Artist/${id}`, Artist);

    return response.data as Artist;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default updateArtist;