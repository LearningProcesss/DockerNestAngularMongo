import { IStage } from '../interface/IStage';
import * as _ from 'lodash';
var objectPath = require("object-path");
export class MatchStage implements IStage {
    stage: {};
    constructor(private operator: string) {
        this.stage = {
            $match: {}
        };
        if (operator === "and" || operator === undefined || operator === null) {
            Object.assign(this.stage["$match"], { $and: [] })
        } else {
            Object.assign(this.stage["$match"], { $or: [] })
        }
    }
    updateInternal(subProperty: string, property: object) {
        if (Object.keys(this.stage).indexOf(subProperty, 0) >= 0) {
            if (this.operator == "and") {
                if (Object.keys(this.stage["$match"]).indexOf("$and") >= 0) {
                    // this.stage["$match.$and"].push(property);
                    objectPath.insert(this.stage, "$match.$and", property, 0);
                }
            }
            if (this.operator == "or") {
                if (Object.keys(this.stage["$match"]).indexOf("$or") >= 0) {
                    objectPath.insert(this.stage, "$match.$or", property, 0);
                }
            }
        }
    }
    updateInternalJs(objJs: object, subProperty: string | object, property: object) {
        throw new Error("Method not implemented.");
    }
}
