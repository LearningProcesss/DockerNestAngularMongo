export interface IParamInterpreter {
    interpretParamater(): object;
    interpretFragment(fragment: string);
    fragments(): string[];
    buildInitialStage();
    stageInternal(): object;
}
