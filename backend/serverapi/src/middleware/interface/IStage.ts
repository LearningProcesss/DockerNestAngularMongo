export interface IStage {
    stage: {};
    updateInternal(subProperty: object | string, property: object);
    updateInternalJs(objJs: object, subProperty: object | string, property: object);
}
