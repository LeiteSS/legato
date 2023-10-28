import { prop } from '@typegoose/typegoose';
import Base from '../../shared/base/base';

export default class Comment extends Base {

	@prop()
	public user?: string;

	@prop()
	public content?: string;

	@prop()
	public replies?: string[];
}