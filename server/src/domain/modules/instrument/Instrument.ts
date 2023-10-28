import { prop } from '@typegoose/typegoose';
import Base from '../../shared/base/base';

export default class Instrument extends Base {

	@prop()
	public instrumentName?: string;

	@prop()
	public instrumentType?: string;
}