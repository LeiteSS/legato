import { prop } from '@typegoose/typegoose';
import Base from '../../shared/base/base';

export default class Music extends Base {

	@prop()
	public title?: string;

	@prop()
	public artist?: string;

	@prop()
	public date?: Date;

	@prop()
	public album?: string;
}