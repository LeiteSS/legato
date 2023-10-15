import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import User from '../../User';

export default class AuthenticateUserService implements Service<User> {
    private repository: Repository<User>;

    constructor(repository: Repository<User>) {
        this.repository = repository;
    }

    public async execute(email: string): Promise<User> {
        const foundedUser = await this.repository
        .aggregateOne([{
            $match: { email },
        }]) as User;

        return foundedUser;
    }
}