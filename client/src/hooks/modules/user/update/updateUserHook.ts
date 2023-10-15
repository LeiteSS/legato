import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '../../lib/api';
import exception from '../../lib/errors/axiosError';
import { AlertContextType } from '../../components/advanced/Alert/AlertContext';
import updateUserSchema from './schema/update';
import { User } from './User';
import validate from '@/lib/validate';

export async function updateUser(
  id: string,
  User: User,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<User | null> {
  try {
    if (!validate(User, alertContext, updateUserSchema)) {
      return null;
    }

    const response = await api.put(`/User/${id}`, User);

    return response.data as User;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default updateUser;