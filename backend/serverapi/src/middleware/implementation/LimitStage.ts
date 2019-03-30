import { IStage } from '../interface/IStage';

export class LimitStage implements IStage {
    stage: {};
    constructor(limit: number) {

        this.stage = {
            $limit: limit
        };
    }
    updateInternal(subProperty: string, property: object) {
        throw new Error("Method not implemented.");
    }

    updateInternalJs(objJs: object, subProperty: string | object, property: object) {
        throw new Error("Method not implemented.");
    }
}
