import { prop } from '@typegoose/typegoose';
import Base from '../../shared/base/base';

export default class User extends Base {

	@prop({ required: true })
	public name!: string;

	@prop({ required: true })
	public email!: string;

	@prop({ required: true })
	public password!: string;

	@prop({ required: true, type: String })
	public accountType!: string;

	@prop({ required: false })
	public datebirth!: Date;
}