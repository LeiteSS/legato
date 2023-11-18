import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import api from '../../lib/api';
import exception from '../../lib/errors/axiosError';
import { AlertContextType } from '../../components/advanced/Alert/AlertContext';
import { Transcription } from './Transcription';

async function listTranscription(
  page: number,
  pageSize: number,
  navigate?: NavigateFunction,
  alertContext?: AlertContextType,
): Promise<Transcription[]> {
  try {
    const response = await api.get(`/Transcription?page=${page}&pageSize=${pageSize}`);

    return response.data as Transcription[];
  } catch (error) {
    if (navigate && alertContext) {
      exception(error as any, navigate!, alertContext!);
    }
    return [];
  }
}

export default listTranscription;