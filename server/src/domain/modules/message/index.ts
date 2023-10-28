import { getModelForClass } from '@typegoose/typegoose';
import Repository from '../shared/repository/Repository';
import Message from './Message';

export const MessageModel = getModelForClass(Message);

export const MessageRepository = new Repository<Message>(MessageModel);

