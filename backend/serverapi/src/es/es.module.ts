import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
    imports: [
        ElasticsearchModule.register({
        host: process.env.loguri//"localhost:9200"
    })],
    providers: [],
    exports: []
})
export class EsModule { }
