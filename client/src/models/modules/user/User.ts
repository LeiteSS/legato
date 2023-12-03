export type User = {
	_id: string;
	name: string;
	email: string;
	password: string;
	accountType: string;
	datebirth: Date;
	token?: string;
}