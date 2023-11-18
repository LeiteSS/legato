import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '../../lib/api';
import exception from '../../lib/errors/axiosError';
import { AlertContextType } from '../../components/advanced/Alert/AlertContext';
import { Comment } from './Comment';

async function listComment(
  page: number,
  pageSize: number,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Comment[]> {
  try {
    const response = await api.get(`/Comment?page=${page}&pageSize=${pageSize}`);

    return response.data as Comment[];
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return [];
  }
}

export default listComment;