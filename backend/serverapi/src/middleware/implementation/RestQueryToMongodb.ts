import { Pipeline } from './Pipeline';
import { Query } from './Query';
import { IHttpRestParams } from '../interface/IHttpRestParams';
import * as mongoose from 'mongoose';

export class RestQueryToMongodb {
    pipelineArray: Pipeline;

    aggregatorContainerJs: any[] = [];

    constructor(private httpParams: IHttpRestParams, private schema: mongoose.Schema<any>) {
        
        this.pipelineArray = new Pipeline();
        
        this.aggregator();
    }
    aggregator() {
        if (this.httpParams.query) {
            // this.pipelineArray.pipeline.push(new Query(this.httpParams.query, this.schema).interpretParamater());

            let q = new Query(this.httpParams.query, this.schema, this.httpParams.operator).interpretParamater();

            this.aggregatorContainerJs.push(q);
        }
    }
    buildPipeline() {
    }
    splitParam(param: string) {
        return param.split(",");
    }
}
