import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '@/service/api';
import exception from '@/lib/errors/axiosError';
import { AlertContextType } from '@/components/advanced/Alert/AlertContext';
import { Post } from './Post';

async function getByIdPost(
  id: string,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<User | null> {
  try {
    const response = await api.get(`/Post/${id}`);

    return response.data as Post;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default getByIdPost;