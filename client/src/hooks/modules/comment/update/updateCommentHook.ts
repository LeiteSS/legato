import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '../../lib/api';
import exception from '../../lib/errors/axiosError';
import { AlertContextType } from '../../components/advanced/Alert/AlertContext';
import updateCommentSchema from './schema/update';
import { Comment } from './Comment';
import validate from '@/lib/validate';

export async function updateComment(
  id: string,
  Comment: Comment,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Comment | null> {
  try {
    if (!validate(Comment, alertContext, updateCommentSchema)) {
      return null;
    }

    const response = await api.put(`/Comment/${id}`, Comment);

    return response.data as Comment;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default updateComment;