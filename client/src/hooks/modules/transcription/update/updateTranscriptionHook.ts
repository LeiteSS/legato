import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '../../lib/api';
import exception from '../../lib/errors/axiosError';
import { AlertContextType } from '../../components/advanced/Alert/AlertContext';
import updateTranscriptionSchema from './schema/update';
import { Transcription } from './Transcription';
import validate from '@/lib/validate';

export async function updateTranscription(
  id: string,
  Transcription: Transcription,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Transcription | null> {
  try {
    if (!validate(Transcription, alertContext, updateTranscriptionSchema)) {
      return null;
    }

    const response = await api.put(`/Transcription/${id}`, Transcription);

    return response.data as Transcription;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default updateTranscription;