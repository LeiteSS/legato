import { prop } from '@typegoose/typegoose';
import Base from '../../shared/base/base';

export default class Artist extends Base {

	@prop()
	public name?: string;

	@prop()
	public genre?: string;

	@prop()
	public followers?: string[];

	@prop()
	public biography?: string;
}