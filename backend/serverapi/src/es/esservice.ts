import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { PingParams, CreateDocumentParams, CreateDocumentResponse, IndexDocumentParams } from 'elasticsearch';
import { ILog } from './log.interface';

@Injectable()
export class EsService {
    constructor(private readonly elasticsearchService: ElasticsearchService) {

    }

    log(index: string, type: string, methodName: string, args: object, point: number) {
        // let prm: CreateDocumentParams = {
        //     index: "logs",
        //     type: type,

        //     body: {
        //         "MethodPoint": point,
        //         "MethodName": methodName,
        //         "MethodArgs": args
        //     }
        // };
        const d = new Date();

        let prm2: IndexDocumentParams<ILog> = {
            index: index,
            type: type,
            opType: "index",
            body: {
                "MethodPoint": point,
                "MethodName": methodName,
                "MethodArgs": args,
                "Date": "" + d.getFullYear() + "" + d.getMonth() + "" + d.getDay() + "." + d.getHours() + "" + d.getMinutes() + "" + d.getSeconds() + "" + d.getMilliseconds()  
            }
        }
        this.elasticsearchService.index(prm2).subscribe((resp: any) => {
            // console.log(resp);

        }, error => console.log(error));
        // this.elasticsearchService.create(prm).subscribe((resp: CreateDocumentResponse) => {
        //     console.log(resp);

        // }, error => {
        //     console.log(error);

        // });
        // let pingPrm: PingParams = {
        //     requestTimeout: 5000
        // };
        // this.elasticsearchService.ping(pingPrm).subscribe(() => {
        //     console.log("es OK!");

        // }, (error) => {
        //     console.log("es " + error);

        // });
    }
}
