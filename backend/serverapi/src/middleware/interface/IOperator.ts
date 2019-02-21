export interface IOperator {
    operator: object;
    interpret(modelPathField: string, value: string, ...options: object[]): object;
}
