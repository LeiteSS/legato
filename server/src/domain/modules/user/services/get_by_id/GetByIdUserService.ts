import { Types } from 'mongoose';
import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import User from '../../User';

export default class GetByIdUserService implements Service<User> {
    private repository: Repository<User>;

    constructor(repository: Repository<User>) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<User> {
        const objectId = new Types.ObjectId(id);

        const foundedUser = await this.repository
        .aggregateOne([{
            $match: { _id: objectId },
        }]) as User;

        return foundedUser;
    }
}