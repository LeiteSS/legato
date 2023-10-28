import { prop } from '@typegoose/typegoose';
import Base from '../../shared/base/base';

export default class Community extends Base {

	@prop()
	public name?: string;

	@prop()
	public description?: string;

	@prop()
	public topic?: string;

	@prop()
	public rules?: string[];

	@prop()
	public users?: string[];
}