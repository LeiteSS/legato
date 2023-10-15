import {
  AnyKeys,
  FilterQuery,
  Model,
  PipelineStage,
  Types,
  UpdateWriteOpResult,
} from 'mongoose';
import Base from '../base/base';

class Repository<T extends Base> {
  private Model: Model<Base>;

  constructor(model: Model<any>) {
    this.Model = model;
  }

  async aggregate(
    pipeline: PipelineStage[],
    page?: number,
    pageSize?: number,
  ): Promise<T[] | any[]> {
    const aggregate = this.Model.aggregate(pipeline);

    if (Number(page) >= 0 && Number(pageSize) >= 0) {
      aggregate.skip(page! * pageSize!).limit(pageSize!);
    }

    return aggregate.exec();
  }

  async aggregateOne(pipeline: PipelineStage[]): Promise<T | any | null> {
    const aggregate = this.Model.aggregate<T>(pipeline).limit(1);
    const result = await aggregate.exec();
    if (result.length > 0) {
      return result[0];
    }

    return null;
  }

  async delete(id: T['_id']): Promise<T | null> {
    return this.Model.findByIdAndRemove(id).lean();
  }

  async deleteMany(model: FilterQuery<T>): Promise<number> {
    const { deletedCount } = await this.Model.deleteMany(model);
    return deletedCount;
  }

  async findAll(): Promise<T[] | null> {
    return this.Model.find({});
  }

  async findById(id: T['_id']):Promise<T | null> {
    return this.Model.findById(id).lean();
  }


  async updateOne(id: T['_id'], value: AnyKeys<T>): Promise<T | null> {
    return this.Model.findByIdAndUpdate(id, value).lean();
  }

  async updateMany(model: FilterQuery<T>, update: Partial<Omit<T, '_id'>>, upsert: boolean = false): Promise<UpdateWriteOpResult> {
    return this.Model.updateMany(model, { $set: update }, { upsert }).lean();
  }

  async remove(id: T['_id'], key: AnyKeys<T>): Promise<UpdateWriteOpResult | null> {
    return this.Model.findByIdAndUpdate(id, { $unset: key }).lean();
  }

  async removeMany(model: FilterQuery<T>, key: AnyKeys<T>): Promise<UpdateWriteOpResult> {
    return this.Model.updateMany(model, { $unset: key }).lean();
  }

  async save(content: Partial<Omit<T, '_id'>>): Promise<T> {
    const data = new this.Model(content);
    data._id = new Types.ObjectId();
    return data.save() as Promise<T>;
  }

  async saveMany(contents: T[]): Promise<Array<T>> {
    const items = await this.Model.insertMany(contents);
    return items as T[];
  }
}

export default Repository;

