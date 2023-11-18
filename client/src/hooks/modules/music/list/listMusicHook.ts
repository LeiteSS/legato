import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '../../lib/api';
import exception from '../../lib/errors/axiosError';
import { AlertContextType } from '../../components/advanced/Alert/AlertContext';
import { Music } from './Music';

async function listMusic(
  page: number,
  pageSize: number,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Music[]> {
  try {
    const response = await api.get(`/Music?page=${page}&pageSize=${pageSize}`);

    return response.data as Music[];
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return [];
  }
}

export default listMusic;