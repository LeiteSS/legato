import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Message from '../../Message';

export default class GetByDestinationMessageService implements Service<Message> {
    private repository: Repository<Message>;

    constructor(repository: Repository<Message>) {
        this.repository = repository;
    }

    public async execute(Destination: string): Promise<Message> {
        const objectId = new Types.ObjectId(id);

        const foundedMessage = await this.repository
        .aggregateOne([{
            $match: { Destination },
        }]) as Message;

        return foundedMessage;
    }
}