import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { RestQueryToMongodb } from "./implementation/RestQueryToMongodb";
import { IHttpRestParams } from "./interface/IHttpRestParams";

@Injectable()
export class MongoqlMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {

      const arg = args[0] as IMongoqlMiddlewareParams;

      // const t = new RestQueryToMongodb(req.query as IHttpRestParams, arg.model);

      // req.aggregator = t.aggregatorContainerJs;

      req.aggregator = RestQueryToMongodb.parse(req.query as IHttpRestParams, arg.model);

      next();
    }
  }
}

export interface IMongoqlMiddlewareParams {
  model: mongoose.Schema<any>;
  path: string;
}
