import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '@/service/api';
import exception from '@/lib/errors/axiosError';
import { AlertContextType } from '@/components/advanced/Alert/AlertContext';
import { Community } from './Community';
import validate from '@/lib/validate';

async function createCommunity(
  Community: Community,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Community | null> {
  try {
    if (!validate(Community, alertContext)) {
      return null;
    }

    const response = await api.post('/Community', Community);

    return response.data as Community;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default createCommunity;