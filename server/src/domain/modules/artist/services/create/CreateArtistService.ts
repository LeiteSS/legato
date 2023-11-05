import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Artist from '../../Artist';

export default class CreateArtistService implements Service<,Artist> {
    private repository: Repository<Artist>;

    constructor(repository: Repository<Artist>) {
        this.repository = repository;
    }

    public async execute(artistToCreate: Artist): Promise<Artist> {
        const createdArtist = await this.repository.save(artistToCreate);
        return createdArtist;
    }
}