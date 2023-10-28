import { Types } from 'mongoose';
import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Music from '../../Music';

export default class GetByIdMusicService implements Service<Music> {
    private repository: Repository<Music>;

    constructor(repository: Repository<Music>) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<Music> {
        const objectId = new Types.ObjectId(id);

        const foundedMusic = await this.repository
        .aggregateOne([{
            $match: { _id: objectId },
        }]) as Music;

        return foundedMusic;
    }
}
