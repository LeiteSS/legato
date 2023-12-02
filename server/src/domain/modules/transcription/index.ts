import { getModelForClass } from '@typegoose/typegoose';
import Repository from '../../shared/repository/repository';
import Transcription from './Transcription';

export const TranscriptionModel = getModelForClass(Transcription);

export const transcriptionRepository = new Repository<Transcription>(TranscriptionModel);

