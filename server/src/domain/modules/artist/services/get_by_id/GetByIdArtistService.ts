import { Types } from 'mongoose';
import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Artist from '../../Artist';

export default class GetByIdArtistService implements Service<Artist> {
    private repository: Repository<Artist>;

    constructor(repository: Repository<Artist>) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<Artist> {
        const objectId = new Types.ObjectId(id);

        const foundedArtist = await this.repository
        .aggregateOne([{
            $match: { _id: objectId },
        }]) as Artist;

        return foundedArtist;
    }
}
