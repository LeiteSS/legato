import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '../../lib/api';
import exception from '../../lib/errors/axiosError';
import { AlertContextType } from '../../components/advanced/Alert/AlertContext';
import { Artist } from './Artist';

export async function searchArtist(
  pipeline: any[],
  page: number,
  pageSize: number,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<User[]> {
  try {
    const response = await api.post(`/Artist/search?page=${page}&pageSize=${pageSize}`, pipeline);

    return response.data as Artist[];
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return [];
  }
}