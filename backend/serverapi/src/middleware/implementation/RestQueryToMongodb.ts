import { Pipeline } from './Pipeline';
import { Query } from './Query';
import { IHttpRestParams } from '../interface/IHttpRestParams';
import * as mongoose from 'mongoose';

export class RestQueryToMongodb {

    static pipeline: any[] = [];

    static parse(httpParams: IHttpRestParams, schema: mongoose.Schema<any>) {

        this.pipeline = [];

        if (httpParams.query) {

            let q = new Query(httpParams.query, schema, httpParams.operator).interpretParamater();

            this.pipeline.push(q);

        }
        return this.pipeline;
    }
}
