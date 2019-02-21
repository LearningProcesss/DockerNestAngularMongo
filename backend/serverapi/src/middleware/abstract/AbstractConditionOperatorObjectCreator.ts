import * as mongoose from 'mongoose';
export abstract class AbstractConditionOperatorObjectCreator {
    protected operator: object = {};
    protected regex: RegExp;
    protected regexOperators: RegExp;
    constructor(protected fragment: string, protected schema: mongoose.Schema<any>) {
        this.regex = new RegExp(/(<|=|>|!|\$|\^|~|\?)/g);
        this.regexOperators = new RegExp(/\b(?:[<>]=?|!|=|!=|<|>>|<<|\$|\^|~|\?=|<>|!!|\?>|!>|\?\?)\b/g);
    }
}
