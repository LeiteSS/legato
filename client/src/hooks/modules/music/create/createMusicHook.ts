import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '@/service/api';
import exception from '@/lib/errors/axiosError';
import { AlertContextType } from '@/components/advanced/Alert/AlertContext';
import { Music } from './Music';
import validate from '@/lib/validate';

async function createMusic(
  Music: Music,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Music | null> {
  try {
    if (!validate(Music, alertContext)) {
      return null;
    }

    const response = await api.post('/Music', Music);

    return response.data as Music;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default createMusic;