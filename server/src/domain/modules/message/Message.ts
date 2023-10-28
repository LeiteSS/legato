import { prop } from '@typegoose/typegoose';
import Base from '../../shared/base/base';

export default class Message extends Base {

	@prop()
	public destination?: string;

	@prop()
	public source?: string;

	@prop()
	public content?: string[];
}