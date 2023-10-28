import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Music from '../../Music';

export default class CreateMusicService implements Service<Music> {
    private repository: Repository<Music>;

    constructor(repository: Repository<Music>) {
        this.repository = repository;
    }

    public async execute(MusicToCreate: Music): Promise<Music> {
        const createdMusic = await this.repository.save(MusicToCreate);
        return createdMusic;
    }
}