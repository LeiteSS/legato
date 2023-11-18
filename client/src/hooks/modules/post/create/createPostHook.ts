import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '@/service/api';
import exception from '@/lib/errors/axiosError';
import { AlertContextType } from '@/components/advanced/Alert/AlertContext';
import { Post } from './Post';
import validate from '@/lib/validate';

async function createPost(
  Post: Post,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Post | null> {
  try {
    if (!validate(Post, alertContext)) {
      return null;
    }

    const response = await api.post('/Post', Post);

    return response.data as Post;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default createPost;