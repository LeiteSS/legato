import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '../../lib/api';
import exception from '../../lib/errors/axiosError';
import { AlertContextType } from '../../components/advanced/Alert/AlertContext';
import { Message } from './Message';

async function listMessage(
  page: number,
  pageSize: number,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Message[]> {
  try {
    const response = await api.get(`/Message?page=${page}&pageSize=${pageSize}`);

    return response.data as Message[];
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return [];
  }
}

export default listMessage;