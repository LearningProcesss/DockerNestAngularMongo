import { IStage } from '../interface/IStage';
import { IPipelineArray } from '../interface/IPipelineArray';
export class Pipeline implements IPipelineArray {
    pipeline: IStage[] = [];
    constructor() {
    }
}
