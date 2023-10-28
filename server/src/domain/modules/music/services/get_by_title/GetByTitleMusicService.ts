import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Music from '../../Music';

export default class GetByTitleMusicService implements Service<Music> {
    private repository: Repository<Music>;

    constructor(repository: Repository<Music>) {
        this.repository = repository;
    }

    public async execute(Title: string): Promise<Music> {
        const objectId = new Types.ObjectId(id);

        const foundedMusic = await this.repository
        .aggregateOne([{
            $match: { Title },
        }]) as Music;

        return foundedMusic;
    }
}