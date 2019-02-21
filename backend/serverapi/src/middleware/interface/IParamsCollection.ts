import { IStage } from './IStage';
import { IParamInterpreter } from './IParamInterpreter';
export interface IParamsCollection {
    httpParamsInterpetedCollection: IParamInterpreter<IStage>[];
}
