import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Community from '../../Community';

export default class CreateCommunityService implements Service<Community> {
    private repository: Repository<Community>;

    constructor(repository: Repository<Community>) {
        this.repository = repository;
    }

    public async execute(CommunityToCreate: Community): Promise<Community> {
        const createdCommunity = await this.repository.save(CommunityToCreate);
        return createdCommunity;
    }
}