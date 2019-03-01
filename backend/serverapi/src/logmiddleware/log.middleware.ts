import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import { EsService } from 'src/es/esservice';
import * as _ from 'lodash';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  constructor(private readonly logService: EsService) {

  }
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {

      this.logService.log("logs-request", "request", "resolve", _.pick(req, ["headers", "method", "originalUrl", "body"]), 0);

      next();
    }
  }
}
