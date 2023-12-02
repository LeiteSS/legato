import { getModelForClass } from '@typegoose/typegoose';
import Message from './Message';
import Repository from '../../shared/repository/repository';

export const MessageModel = getModelForClass(Message);

export const messageRepository = new Repository<Message>(MessageModel);

