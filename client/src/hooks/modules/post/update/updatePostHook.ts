import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '../../lib/api';
import exception from '../../lib/errors/axiosError';
import { AlertContextType } from '../../components/advanced/Alert/AlertContext';
import updatePostSchema from './schema/update';
import { Post } from './Post';
import validate from '@/lib/validate';

export async function updatePost(
  id: string,
  Post: Post,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Post | null> {
  try {
    if (!validate(Post, alertContext, updatePostSchema)) {
      return null;
    }

    const response = await api.put(`/Post/${id}`, Post);

    return response.data as Post;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default updatePost;