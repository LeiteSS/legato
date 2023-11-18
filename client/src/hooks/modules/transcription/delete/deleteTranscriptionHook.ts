import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '@/service/api';
import exception from '@/lib/errors/axiosError';
import { AlertContextType } from '@/components/advanced/Alert/AlertContext';
import { Transcription } from './Transcription';

export async function deleteTranscription(
  id: string,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
) {
  try {
    const response = await api.delete(`/Transcription/${id}`);

    return response.data as Transcription;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default deleteTranscription;