export interface IParamInterpreter<T> {
    interpretParamater(): object;
    interpretFragment(fragment: string);
    fragments(): string[];
    buildInitialStage();
    stageInternal(): object;
}
