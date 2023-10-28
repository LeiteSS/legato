import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Artist from '../../Artist';

export default class GetByNameArtistService implements Service<Artist> {
    private repository: Repository<Artist>;

    constructor(repository: Repository<Artist>) {
        this.repository = repository;
    }

    public async execute(Name: string): Promise<Artist> {
        const objectId = new Types.ObjectId(id);

        const foundedArtist = await this.repository
        .aggregateOne([{
            $match: { Name },
        }]) as Artist;

        return foundedArtist;
    }
}