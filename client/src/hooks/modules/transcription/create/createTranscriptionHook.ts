import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '@/service/api';
import exception from '@/lib/errors/axiosError';
import { AlertContextType } from '@/components/advanced/Alert/AlertContext';
import { Transcription } from './Transcription';
import validate from '@/lib/validate';

async function createTranscription(
  Transcription: Transcription,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Transcription | null> {
  try {
    if (!validate(Transcription, alertContext)) {
      return null;
    }

    const response = await api.post('/Transcription', Transcription);

    return response.data as Transcription;
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return null;
  }
}

export default createTranscription;