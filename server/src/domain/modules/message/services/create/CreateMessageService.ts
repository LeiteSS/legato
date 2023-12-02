import Service from '../../../../shared/interfaces/Service';
import Repository from '../../../../shared/repository/repository';
import Message from '../../Message';

export default class CreateMessageService implements Service<Message> {
    private repository: Repository<Message>;

    constructor(repository: Repository<Message>) {
        this.repository = repository;
    }

    public async execute(MessageToCreate: Message): Promise<Message> {
        const createdMessage = await this.repository.save(MessageToCreate);
        return createdMessage;
    }
}