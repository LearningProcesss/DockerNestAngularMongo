import * as mongoose from 'mongoose';
import { AbstractParamInterpreter } from '../abstract/AbstractParamInterpreter';
import { MatchStage } from './MatchStage';
import { ConditionOperatorCreator } from './ConditionOperatorCreator';
import { IParamInterpreter } from '../interface/IParamInterpreter';
import { IField } from '../interface/IField';

export class Query extends AbstractParamInterpreter implements IParamInterpreter {

    constructor(parameter: string, protected schema: mongoose.Schema<any>, protected operator: string) {
        super(parameter, schema, operator);
    }
    interpretParamater() {

        this.buildInitialStage();

        this.fragmentTest().forEach(field => this.interpretFragmentField(field));

        // this.fragments().map(fragment => this.interpretFragment(fragment));

        return this.stage.stage;
    }
    interpretFragment(fragment: string) {
        
        // this.stage.updateInternal("$match", new ConditionOperatorCreator(fragment, this.schema).interpret());
        
        //OLD this.stageJs.updateInternal("$match", new ConditionOperatorCreator(fragment, this.schema).interpret());
    }

    interpretFragmentField(field: IField) {
        this.stage.updateInternal("$match", new ConditionOperatorCreator(field, this.schema).interpret());
    }
    fragments(): string[] {
        return this.paramter.split(",");
    }

    fragmentTest() {

        let fields: IField[] = [];

        this.paramter.split(this.regexSplitVirgolaNotParentesi).forEach(fragment => {

            try {

                let fieldDefUrl = fragment.split(this.regexSplitSeparatoreNotParentesi);

                // let field: IField = {
                //     field: fieldDefUrl[0].split(this.regexSplitUgualeNotParentesi)[1],
                //     op: fieldDefUrl[1].split(this.regexSplitUgualeNotParentesi)[1],
                //     value: fieldDefUrl[2].split(this.regexSplitUgualeNotParentesi)[1]
                // }
                let field: IField = {
                    field: fieldDefUrl.filter(f => f.startsWith("field"))[0].split(this.regexSplitUgualeNotParentesi)[1],
                    op: fieldDefUrl.filter(f => f.startsWith("op"))[0].split(this.regexSplitUgualeNotParentesi)[1],
                    value: fieldDefUrl.filter(f => f.startsWith("value"))[0].split(this.regexSplitUgualeNotParentesi)[1]
                }

                fields.push(field);

                field = null;

                fieldDefUrl = null;

            } catch (error) {
                return;
            }
        });

        return fields;
    }

    buildInitialStage() {
        this.stage = new MatchStage(this.operator);
    }
    stageInternal(): object {
        return this.stage.stage;
    }
}
