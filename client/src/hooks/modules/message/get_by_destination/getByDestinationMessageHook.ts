import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '@/service/api';
import exception from '@/lib/errors/axiosError';
import { AlertContextType } from '@/components/advanced/Alert/AlertContext';
import { Message } from './Message';

async function getByDestinationMessage(
  Destination: string,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<User | null> {
  try {
    const response = await api.get(`/Message/${Destination}`);

    return response.data as Message;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default getByDestinationMessage;