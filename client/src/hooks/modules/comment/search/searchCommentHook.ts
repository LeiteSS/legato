import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '../../lib/api';
import exception from '../../lib/errors/axiosError';
import { AlertContextType } from '../../components/advanced/Alert/AlertContext';
import { Comment } from './Comment';

export async function searchComment(
  pipeline: any[],
  page: number,
  pageSize: number,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<User[]> {
  try {
    const response = await api.post(`/Comment/search?page=${page}&pageSize=${pageSize}`, pipeline);

    return response.data as Comment[];
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return [];
  }
}