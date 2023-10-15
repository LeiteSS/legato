import { Schema, Types } from 'mongoose';
import { ModelOptions, prop } from '@typegoose/typegoose';

@ModelOptions({ schemaOptions: { timestamps: true, versionKey: false } })
class Base<T = Types.ObjectId> {
  @prop({ type: () => Schema.Types.ObjectId })
  public _id?: T | string;
}

export default Base;

