import { BookSchema } from "src/books/book.schema";


export interface IRestApiQueryInterpreter {
    query: string;
    projection: string;
    sort: string;
    limit: number;
    operator: string;
}

export interface IRestApiQueryAggregator<T> {

    model: T;
    aggregator: object[];

    urlInterpreter(apiQueryParams: IRestApiQueryInterpreter): object[];
}

export interface IPipeline {

}

export interface IPipelineArray {
    pipeline: Array<IPipeline>;
}

export interface IStage {
    stage: object;

    updateSelf(subMasterObject: string, objectIn: object): void;
}

export abstract class AbstractStage implements IStage {
    stage: object;

    constructor() {

    }

    public abstract updateSelf(subMasterObject: string, objectIn: object): void;
}

export class MatchStage implements AbstractStage {

    stage: object;
    constructor() {
        Object.assign(this.stage, { $match: {} });
    }
    updateSelf(subMasterObject: string, objectIn: object): void {
        
    }
}

export interface IStageBuilder {
    buildMatchTest<AbstractStage>(arg: IStage, queryOperator: string);
}

export class StageBuilder implements IStageBuilder {
    buildMatchTest<AbstractStage>(arg: IStage, queryOperator: string): IStage {

        if (queryOperator === "and" || queryOperator === undefined || queryOperator === null) {

            // Object.assign(arg, { $and: [] });

            arg.updateSelf("$match", { $and: [] });
        } else {

            // Object.assign(arg, { $or: [] })
            arg.updateSelf("$match", { $or: [] });
        }

        return arg;
    }

    constructor() { }

    buildMatchPipelineStage(matchOperator: any, queryOperator: string) {

        let m = {
            $match: {

            }
        }

        if (queryOperator === "and" || queryOperator === undefined || queryOperator === null) {
            // m.$match["$and"] = [{}]
            Object.assign(m.$match, { $and: [] })
        } else {
            // m.$match.$or = []
            Object.assign(m.$match, { $or: [] })
        }

        if (matchOperator !== undefined && matchOperator !== null) {
            m.$match[Object.keys(matchOperator)[0]] = matchOperator[Object.keys(matchOperator)[0]]
        }

        return m
    }
    buildLookupPipelineStage(fromCollection: string, localFieldCollection: string, foreignFieldCollection: string, asCollection: string, initPipeline: boolean) {

        let l = {
            $lookup: {
                from: fromCollection,
                as: asCollection,
                localField: localFieldCollection,
                foreignField: foreignFieldCollection,
                pipeline: []
            }
        }

        return l
    }
    buildUnwindPipelineStage(modelPathField: string) {
        return { $unwind: '$' + modelPathField }
    }
}

export class BookQueryAggregator<BookSchema> extends StageBuilder implements IRestApiQueryAggregator<BookSchema>  {
    model: BookSchema;
    aggregator: object[];

    constructor() { super(); }

    urlInterpreter(apiQueryParams: IRestApiQueryInterpreter): object[] {

        const sb = new StageBuilder();
        sb.buildMatchTest<MatchStage>(new MatchStage(), "");
        throw new Error("Method not implemented.");

    }
}

// interface IKeyValueProcessor<T, U> {
//     process(key: T, val: U): void;
// };

// class kvProcessor implements IKeyValueProcessor<number, string>
// {
//     process(key: number, val: string): void {
//         console.log(`Key = ${key}, val = ${val}`);
//     }
// }