import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '../../lib/api';
import exception from '../../lib/errors/axiosError';
import { AlertContextType } from '../../components/advanced/Alert/AlertContext';
import updateMessageSchema from './schema/update';
import { Message } from './Message';
import validate from '@/lib/validate';

export async function updateMessage(
  id: string,
  Message: Message,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Message | null> {
  try {
    if (!validate(Message, alertContext, updateMessageSchema)) {
      return null;
    }

    const response = await api.put(`/Message/${id}`, Message);

    return response.data as Message;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default updateMessage;