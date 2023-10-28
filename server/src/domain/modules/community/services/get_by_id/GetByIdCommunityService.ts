import { Types } from 'mongoose';
import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Community from '../../Community';

export default class GetByIdCommunityService implements Service<Community> {
    private repository: Repository<Community>;

    constructor(repository: Repository<Community>) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<Community> {
        const objectId = new Types.ObjectId(id);

        const foundedCommunity = await this.repository
        .aggregateOne([{
            $match: { _id: objectId },
        }]) as Community;

        return foundedCommunity;
    }
}
