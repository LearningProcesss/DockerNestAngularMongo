import * as mongoose from 'mongoose';
export interface IMongoqlMiddlewareParams {
  model: mongoose.Schema<any>;
  path: string;
}
