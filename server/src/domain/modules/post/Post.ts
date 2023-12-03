import { prop } from '@typegoose/typegoose';
import Base from '../../shared/base/base';

export default class Post extends Base {

	@prop()
	public user?: string;

	@prop()
	public caption?: string;

	@prop()
	public file?: any;

	@prop()
	public comments?: Comment[];

	@prop()
	public likes?: number;

	@prop()
	public reactions?: string[];
}