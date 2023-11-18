import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '../../lib/api';
import exception from '../../lib/errors/axiosError';
import { AlertContextType } from '../../components/advanced/Alert/AlertContext';
import updateMusicSchema from './schema/update';
import { Music } from './Music';
import validate from '@/lib/validate';

export async function updateMusic(
  id: string,
  Music: Music,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Music | null> {
  try {
    if (!validate(Music, alertContext, updateMusicSchema)) {
      return null;
    }

    const response = await api.put(`/Music/${id}`, Music);

    return response.data as Music;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default updateMusic;