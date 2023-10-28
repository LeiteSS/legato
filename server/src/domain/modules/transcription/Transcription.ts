import { prop } from '@typegoose/typegoose';
import Base from '../../shared/base/base';

export default class Transcription extends Base {

	@prop()
	public title_music?: genre;

	@prop()
	public file?: File;

	@prop()
	public genre?: string;

	@prop()
	public difficult?: string;

	@prop()
	public instrument?: string;
}