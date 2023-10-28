import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Community from '../../Community';

export default class GetByNameCommunityService implements Service<Community> {
    private repository: Repository<Community>;

    constructor(repository: Repository<Community>) {
        this.repository = repository;
    }

    public async execute(Name: string): Promise<Community> {
        const objectId = new Types.ObjectId(id);

        const foundedCommunity = await this.repository
        .aggregateOne([{
            $match: { Name },
        }]) as Community;

        return foundedCommunity;
    }
}