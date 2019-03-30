import { IStage } from '../interface/IStage';
import * as _ from 'lodash';
var objectPath = require("object-path");
export class ProjectStage implements IStage {
    stage: {};
    constructor() {
        this.stage = {
            $project: {}
        };
    }
    updateInternal(subProperty: string, property: object) {

        if (property == null) { return; }

        if (Object.keys(this.stage).indexOf(subProperty, 0) >= 0) {
            _.assign(this.stage["$project"], property);             
        }
    }

    updateInternalJs(objJs: object, subProperty: string | object, property: object) {
        throw new Error("Method not implemented.");
    }
}
