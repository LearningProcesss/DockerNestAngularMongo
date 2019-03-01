import { IParamFieldValue } from '../interface/IParamFieldValue';
import { IOperatorObjectCreator } from '../interface/IOperatorObjectCreator';
import { AbstractConditionOperatorObjectCreator } from '../abstract/AbstractConditionOperatorObjectCreator';
import * as mongoose from 'mongoose';
import { IOperator } from '../interface/IOperator';
import { Eq, Gt, Lt, Gte, Lte, Ne, RegEndWith, RegStartWith, RegContains, Exist, NotExist, In, NotIn, Between } from './Operators';
export class ConditionOperatorCreator extends AbstractConditionOperatorObjectCreator implements IOperatorObjectCreator {
    fieldModelValue: IParamFieldValue;
    operatorDefList: Map<string, IOperator> = new Map<string, IOperator>();

    constructor(fragment: string, schema: mongoose.Schema<any>) {
        super(fragment, schema);

        this.operatorDefList.set("=", new Eq());
        this.operatorDefList.set(">", new Gt());
        this.operatorDefList.set("<", new Lt());
        this.operatorDefList.set(">=", new Gte());
        this.operatorDefList.set("<=", new Lte());
        this.operatorDefList.set("!=", new Ne());
        this.operatorDefList.set("$", new RegEndWith());
        this.operatorDefList.set("^", new RegStartWith());
        this.operatorDefList.set("~", new RegContains());
        this.operatorDefList.set("??", new Exist());
        this.operatorDefList.set("!!", new NotExist());
        this.operatorDefList.set("?>", new In());
        this.operatorDefList.set("!>", new NotIn());
        this.operatorDefList.set("<>", new Between());

        this.init();
    }

    init(): void {
        
        let campoValoreNoOperator = this.fragment.split(this.regexOperators);
        
        let test = this.regexOperators.exec(this.fragment);

        this.fieldModelValue = { fieldType: this.schema.path(campoValoreNoOperator[0])["instance"], field: campoValoreNoOperator[0], operator: test != null && test.length == 1 ? test[0] : "", value: campoValoreNoOperator[1] };

        campoValoreNoOperator = null;
        
        test = null;
    }
    interpret(): object {
        return this.operatorDefList.get(this.fieldModelValue.operator).interpret(this.fieldModelValue.field, this.fieldModelValue.value, null);
    }
    updateInternal(subProperty: string | object, property: object) {
        throw new Error("Method not implemented.");
    }


}
