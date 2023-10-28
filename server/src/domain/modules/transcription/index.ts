import { getModelForClass } from '@typegoose/typegoose';
import Repository from '../shared/repository/Repository';
import Transcription from './Transcription';

export const TranscriptionModel = getModelForClass(Transcription);

export const TranscriptionRepository = new Repository<Transcription>(TranscriptionModel);

