import { IParamFieldValue } from './IParamFieldValue';
export interface IOperatorObjectCreator {
    // operatorToMongo: Map<string, object>;
    // operatorToMongoCallbacks: Map<string, object>;
    fieldModelValue: IParamFieldValue;
    init(): void;
    interpret(): object;
    updateInternal(subProperty: object | string, property: object);
}
