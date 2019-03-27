import { IField } from "./IField";

export interface IParamInterpreter {
    interpretParamater(): object;
    interpretFragment(fragment: string);
    fragments(): string[];
    fragmentTest() : IField[];
    buildInitialStage();
    stageInternal(): object;
}
