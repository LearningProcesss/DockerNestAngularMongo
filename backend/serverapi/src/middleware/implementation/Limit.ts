import { AbstractParamInterpreter } from "../abstract/AbstractParamInterpreter";
import { IParamInterpreter } from "../interface/IParamInterpreter";
import { IUrlField } from "../interface/IField";
import * as mongoose from 'mongoose';
import { LimitStage } from "./LimitStage";

export class Limit extends AbstractParamInterpreter implements IParamInterpreter {
    interpretParamater(): object {
        return this.stageInternal();
    }
    interpretFragment(fragment: string) {
        throw new Error("Method not implemented.");
    }
    fragments(): string[] {
        throw new Error("Method not implemented.");
    }
    fragmentTest(): IUrlField[] {
        throw new Error("Method not implemented.");
    }
    buildInitialStage() {
        this.stage = new LimitStage(this.tryParseInt(this.paramter));
    }
    stageInternal(): object {

        if (this.stage === undefined) {
            return null;
        }

        return this.stage.stage;
    }

    constructor(parameter: string, protected schema: mongoose.Schema<any>, protected operator: string) {
        super(parameter, schema, operator);

        if (this.tryParseInt(this.paramter) != null) {
            this.buildInitialStage();
        }
    }




}