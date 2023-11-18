import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '@/service/api';
import exception from '@/lib/errors/axiosError';
import { AlertContextType } from '@/components/advanced/Alert/AlertContext';
import { Comment } from './Comment';
import validate from '@/lib/validate';

async function createComment(
  Comment: Comment,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Comment | null> {
  try {
    if (!validate(Comment, alertContext)) {
      return null;
    }

    const response = await api.post('/Comment', Comment);

    return response.data as Comment;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default createComment;