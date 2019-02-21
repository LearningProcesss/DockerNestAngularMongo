import { IStage } from '../interface/IStage';
export class MatchStage implements IStage {
    stage: {};
    constructor() {
        this.stage = {
            $match: {}
        };
    }
    updateInternal(subProperty: string, property: object) {
        if (Object.keys(this.stage).indexOf(subProperty, 0) >= 0) {
            Object.assign(this.stage[subProperty], property);
        }
    }
    updateInternalJs(objJs: object, subProperty: string | object, property: object) {
        throw new Error("Method not implemented.");
    }
}
