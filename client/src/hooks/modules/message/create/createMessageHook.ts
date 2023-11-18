import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '@/service/api';
import exception from '@/lib/errors/axiosError';
import { AlertContextType } from '@/components/advanced/Alert/AlertContext';
import { Message } from './Message';
import validate from '@/lib/validate';

async function createMessage(
  Message: Message,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Message | null> {
  try {
    if (!validate(Message, alertContext)) {
      return null;
    }

    const response = await api.post('/Message', Message);

    return response.data as Message;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default createMessage;