import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '@/service/api';
import exception from '@/lib/errors/axiosError';
import { AlertContextType } from '@/components/advanced/Alert/AlertContext';
import { Community } from './Community';

export async function deleteCommunity(
  id: string,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
) {
  try {
    const response = await api.delete(`/Community/${id}`);

    return response.data as Community;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default deleteCommunity;