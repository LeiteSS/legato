import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '../../lib/api';
import exception from '../../lib/errors/axiosError';
import { AlertContextType } from '../../components/advanced/Alert/AlertContext';
import updateCommunitySchema from './schema/update';
import { Community } from './Community';
import validate from '@/lib/validate';

export async function updateCommunity(
  id: string,
  Community: Community,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Community | null> {
  try {
    if (!validate(Community, alertContext, updateCommunitySchema)) {
      return null;
    }

    const response = await api.put(`/Community/${id}`, Community);

    return response.data as Community;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default updateCommunity;