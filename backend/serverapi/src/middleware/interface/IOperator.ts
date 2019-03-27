export interface IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object;

    // convert(modelPathFieldType: string): object;
}
