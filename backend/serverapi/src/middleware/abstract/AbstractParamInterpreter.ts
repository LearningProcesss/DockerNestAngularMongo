import { IStage } from '../interface/IStage';
import * as mongoose from 'mongoose';
export abstract class AbstractParamInterpreter {
    protected stage: IStage;
    protected stageJs: {};
    constructor(protected paramter: string, protected schema: mongoose.Schema<any>) {
    }
}
