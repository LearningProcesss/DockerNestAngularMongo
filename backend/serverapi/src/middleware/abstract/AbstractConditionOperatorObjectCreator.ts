import * as mongoose from 'mongoose';
import { IUrlField } from '../interface/IField';
export abstract class AbstractConditionOperatorObjectCreator {
    protected operator: object = {};
    protected regex: RegExp;
    protected regexOperators: RegExp;

    // riconosce la virgola che separa i vari field, ma non dentro una stringa ''
    // esempio: 
    // books?query=field=autore:op=sw:value='dsdsdsd,,d,sd,sld,s',field=autore:op=sw:value='dsdsdsd,,d,sd,sld,s'
    protected regexSplitVirgola: RegExp;
    // riconosce la : che separa i vari field, ma non dentro una stringa ''
    // esempio: 
    // books?query=field=autore:op=sw:value='dsdsdsd,,d,sd,sld,s',field=autore:op=sw:value='dsdsdsd,,d,sd,sld,s'
    protected regexSplitSeparore: RegExp;
    
    // constructor(protected fragment: string, protected schema: mongoose.Schema<any>) {

    //     this.regex = new RegExp(/(<|=|>|!|\$|\^|~|\?)/g);

    //     this.regexOperators = new RegExp(/\b(?:[<>]=?|!|=|!=|<|>>|<<|\$|\^|~|\?=|<>|!!|\?>|!>|\?\?)\b/g);
        
    //     this.regexSplitVirgola = new RegExp(/,(?=(?:(?:[^'"]*(?:'|")){2})*[^'"]*$)/g);

    //     this.regexSplitSeparore = new RegExp(/:(?=(?:(?:[^'"]*(?:'|")){2})*[^'"]*$)/g);
    // }
    constructor(protected fragment: IUrlField, protected schema: mongoose.Schema<any>) {

        this.regex = new RegExp(/(<|=|>|!|\$|\^|~|\?)/g);

        this.regexOperators = new RegExp(/\b(?:[<>]=?|!|=|!=|<|>>|<<|\$|\^|~|\?=|<>|!!|\?>|!>|\?\?)\b/g);
        
        this.regexSplitVirgola = new RegExp(/,(?=(?:(?:[^'"]*(?:'|")){2})*[^'"]*$)/g);

        this.regexSplitSeparore = new RegExp(/:(?=(?:(?:[^'"]*(?:'|")){2})*[^'"]*$)/g);
    }
}
