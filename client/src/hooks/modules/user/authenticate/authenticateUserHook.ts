import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '@/service/api';
import exception from '@/lib/errors/axiosError';
import { AlertContextType } from '@/components/advanced/Alert/AlertContext';
import { User } from './User';
import validate from '@/lib/validate';

async function authenticateUser(
  user: User,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<User | null> {
  try {
    if (!validate(user, alertContext)) {
      return null;
    }

    const response = await api.post('/login', user);

    return response.data as User;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default authenticateUser;