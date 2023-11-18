import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '@/service/api';
import exception from '@/lib/errors/axiosError';
import { AlertContextType } from '@/components/advanced/Alert/AlertContext';
import { Community } from './Community';

async function getByNameCommunity(
  Name: string,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<User | null> {
  try {
    const response = await api.get(`/Community/${Name}`);

    return response.data as Community;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default getByNameCommunity;