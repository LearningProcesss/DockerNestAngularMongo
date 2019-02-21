import { IParamInterpreter } from '../interface/IParamInterpreter';
import { IStage } from '../interface/IStage';
export interface IParamsCollection {
    httpParamsInterpetedCollection: IParamInterpreter<IStage>[];
}
