import { IStage } from '../interface/IStage';
import * as mongoose from 'mongoose';
export abstract class AbstractParamInterpreter {
    protected stage: IStage;
    protected stageJs: {};

    // riconosce la virgola che separa i vari field, ma non dentro una stringa ''
    // esempio: 
    // books?query=field=autore:op=sw:value='dsdsdsd,,d,sd,sld,s',field=autore:op=sw:value='dsdsdsd,,d,sd,sld,s'
    protected regexSplitVirgola: RegExp;
    // riconosce la : che separa i vari field, ma non dentro una stringa ''
    // esempio: 
    // books?query=field=autore:op=sw:value='dsdsdsd,,d,sd,sld,s',field=autore:op=sw:value='dsdsdsd,,d,sd,sld,s'
    protected regexSplitSeparore: RegExp;
    // riconosce la : che separa i vari field, ma non dentro una stringa ''
    // esempio: 
    // books?query=field=autore:op=sw:value='dsdsdsd,,d,sd,sld,s',field=autore:op=sw:value='dsdsdsd,,d,sd,sld,s'
    protected regexSplitUguale: RegExp;

    protected regexSplitVirgolaNotParentesi: RegExp;
    protected regexSplitSeparatoreNotParentesi: RegExp;
    protected regexSplitUgualeNotParentesi: RegExp;

    constructor(protected paramter: string, protected schema: mongoose.Schema<any>, protected operator: string) {
        
        this.regexSplitVirgola = new RegExp(/,(?=(?:(?:[^'"]*(?:'|")){2})*[^'"]*$)/g);

        this.regexSplitSeparore = new RegExp(/:(?=(?:(?:[^'"]*(?:'|")){2})*[^'"]*$)/g);
        
        this.regexSplitUguale = new RegExp(/=(?=(?:(?:[^'"]*(?:'|")){2})*[^'"]*$)/g);
        
        this.regexSplitVirgolaNotParentesi = new RegExp(/,(?![^\(\[]*[\]\)])/g);

        this.regexSplitSeparatoreNotParentesi = new RegExp(/:(?![^\(\[]*[\]\)])/g);

        this.regexSplitUgualeNotParentesi = new RegExp(/=(?![^\(\[]*[\]\)])/g);
    }
}
