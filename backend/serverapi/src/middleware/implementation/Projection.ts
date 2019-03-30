import { AbstractParamInterpreter } from "../abstract/AbstractParamInterpreter";
import { IParamInterpreter } from "../interface/IParamInterpreter";
import { IUrlField } from "../interface/IField";
import * as mongoose from 'mongoose';
import { ProjectStage } from "./ProjectStage";
import { ConditionOperatorCreator } from "./ConditionOperatorCreator";

export class Projection extends AbstractParamInterpreter implements IParamInterpreter {
    
    constructor(parameter: string, protected schema: mongoose.Schema<any>, protected operator: string) {
        super(parameter, schema, operator);
    }
    
    interpretParamater(): object {
        
        let mongoQueryParams = this.fragmentTest().map(field => new ConditionOperatorCreator(field, this.schema).interpret());

        if (!mongoQueryParams.every(prm => prm === null)) {

            this.buildInitialStage();

            mongoQueryParams.filter(prm => prm !== null)
                .forEach(prm => this.stage.updateInternal("$project", prm));
        }

        mongoQueryParams = null;

        // this.fragments().map(fragment => this.interpretFragment(fragment));

        // return this.stage.stage;

        return this.stageInternal();
    }    
    interpretFragment(fragment: string) {
        throw new Error("Method not implemented.");
    }
    fragments(): string[] {
        throw new Error("Method not implemented.");
    }
    fragmentTest(): IUrlField[] {

        let fields: IUrlField[] = [];

        this.paramter.split(this.regexSplitVirgolaNotParentesi).forEach(fragment => {

            try {

                let fieldDefUrl = fragment.split(this.regexSplitSeparatoreNotParentesi);

                let field: IUrlField = {
                    field: fieldDefUrl.filter(f => f.startsWith("field"))[0].split(this.regexSplitUgualeNotParentesi)[1],
                    op: fieldDefUrl.filter(f => f.startsWith("op"))[0].split(this.regexSplitUgualeNotParentesi)[1],
                    value: fieldDefUrl.filter(f => f.startsWith("value"))[0].split(this.regexSplitUgualeNotParentesi)[1]
                }

                if (field.field !== undefined && field.op !== undefined && field.value !== undefined) {

                    fields.push(field);

                }

                field = null;

                fieldDefUrl = null;

            } catch (error) {
                return;
            }
        });

        return fields;
    }
    buildInitialStage() {
        this.stage = new ProjectStage();
    }
    stageInternal(): object {
        if (this.stage === undefined) { 
            return null;
        }

        return this.stage.stage;
    }


}