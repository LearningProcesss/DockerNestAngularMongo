import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common'
import { RestQueryToMongodb } from "./implementation/RestQueryToMongodb";
import { IHttpRestParams } from "./interface/IHttpRestParams";
import { IMongoqlMiddlewareParams } from './interface/IMongoqlMiddlewareParams';

@Injectable()
export class MongoqlMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {

      req.aggregator = null;

      const arg = args[0] as IMongoqlMiddlewareParams;

      console.log(req.query);

      req.aggregator = RestQueryToMongodb.parse(req.query as IHttpRestParams, arg.model);

      console.log(JSON.stringify(req.aggregator));

      next();
    }
  }
}


