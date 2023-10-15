import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import User from '../../User';

export default class CreateUserService implements Service<User> {
    private repository: Repository<User>;

    constructor(repository: Repository<User>) {
        this.repository = repository;
    }

    public async execute(UserToCreate: User): Promise<User> {
        const createdUser = await this.repository.save(UserToCreate);
        return createdUser;
    }
}