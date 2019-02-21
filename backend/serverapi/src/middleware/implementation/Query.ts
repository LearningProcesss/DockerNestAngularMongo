import * as mongoose from 'mongoose';
import { AbstractParamInterpreter } from '../abstract/AbstractParamInterpreter';
import { MatchStage } from './MatchStage';
import { ConditionOperatorCreator } from './ConditionOperatorCreator';
import { IParamInterpreter } from '../interface/IParamInterpreter';

export class Query extends AbstractParamInterpreter implements IParamInterpreter<MatchStage> {

    constructor(parameter: string, protected schema: mongoose.Schema<any>) {
        super(parameter, schema);
    }
    interpretParamater() {
        
        this.buildInitialStage();
        
        this.fragments().map(fragment => this.interpretFragment(fragment));
        
        return this.stage.stage;
    }
    interpretFragment(fragment: string) {
        this.stage.updateInternal("$match", new ConditionOperatorCreator(fragment, this.schema).interpret());
        // this.stageJs.updateInternal("$match", new ConditionOperatorCreator(fragment, this.schema).interpret());
    }
    fragments(): string[] {
        return this.paramter.split(",");
    }
    buildInitialStage() {
        this.stage = new MatchStage();
    }
    stageInternal(): object {
        return this.stage.stage;
    }
}
