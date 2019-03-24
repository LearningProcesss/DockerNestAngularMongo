import { Pipeline } from './Pipeline';
import { Query } from './Query';
import { IHttpRestParams } from '../interface/IHttpRestParams';
import * as mongoose from 'mongoose';

export class RestQueryToMongodb {
    pipelineArray: Pipeline;

    aggregatorContainerJs: any[] = [];

    static pipeline: any[] = [];

    // constructor(private httpParams: IHttpRestParams, private schema: mongoose.Schema<any>) {

    //     this.pipelineArray = new Pipeline();

    //     this.aggregator();
    // }

    static parse(httpParams: IHttpRestParams, schema: mongoose.Schema<any>) {
        if (httpParams.query) {

            let q = new Query(httpParams.query, schema, httpParams.operator).interpretParamater();

            this.pipeline.push(q);
            
        }
        return this.pipeline;
    }
    // aggregator() {
    //     if (this.httpParams.query) {
    //         // this.pipelineArray.pipeline.push(new Query(this.httpParams.query, this.schema).interpretParamater());

    //         let q = new Query(this.httpParams.query, this.schema, this.httpParams.operator).interpretParamater();

    //         this.aggregatorContainerJs.push(q);
    //     }
    // }
    
    splitParam(param: string) {
        return param.split(",");
    }
}
