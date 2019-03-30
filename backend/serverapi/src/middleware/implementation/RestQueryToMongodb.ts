import { Query } from './Query';
import { IHttpRestParams } from '../interface/IHttpRestParams';
import * as mongoose from 'mongoose';
import { Projection } from './Projection';
import { Limit } from './Limit';

export class RestQueryToMongodb {

    static pipeline: any[] = [];

    static parse(httpParams: IHttpRestParams, schema: mongoose.Schema<any>) {

        this.pipeline = [];

        if (httpParams.query) {

            let q = new Query(httpParams.query, schema, httpParams.operator).interpretParamater();

            if (q != null && q != undefined) {
                this.pipeline.push(q);
            }
        } if (httpParams.projection) {

            let p = new Projection(httpParams.projection, schema, "").interpretParamater();

            if (p != null && p != undefined) {
                this.pipeline.push(p);
            }
        } if (httpParams.limit) {

            let l = new Limit(httpParams.limit, schema, "").interpretParamater();

            if (l != null && l != undefined) {
                this.pipeline.push(l);
            }
        } else {
            this.pipeline.push(new Limit("50", schema, "").interpretParamater());
        }

        return this.pipeline.length > 0 ? this.pipeline : null;
    }
}
