import Repository from '../../../../shared/repository/repository';
import User from '../../User';
import Service from '../../../../shared/interfaces/Service';
import { Types } from 'mongoose';
import PartialUser from './model/PartialUser';

export default class UpdatePartialUserService implements Service<User | null> {
    private repository: Repository<User>;

    constructor(repository: Repository<User>) {
      this.repository = repository;
    }

    public async execute(
        id: string,
        requestedPartialUser: PartialUser,
      ): Promise<User | null> {
        const objectId = new Types.ObjectId(id);
        const userFound = await this.repository.findById(id);
        const password = requestedPartialUser.password as string;
        userFound!.password = password;

        if (userFound) {
          const updatedUser= await this.repository.updateOne(objectId, userFound);
          return updatedUser;
        }
    
        return null;
      }
}