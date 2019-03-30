import { IUrlField } from "./IField";

export interface IParamInterpreter {
    interpretParamater(): object;
    interpretFragment(fragment: string);
    fragments(): string[];
    fragmentTest() : IUrlField[];
    buildInitialStage();
    stageInternal(): object;
}
