import { IOperator } from '../interface/IOperator';
import { AbstractOperator } from '../abstract/AbstractOperator';
export class Eq extends AbstractOperator implements IOperator {

    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $eq: this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value)) } };

        return this.operator;
    }
}
export class Gt extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $gt: this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value)) } };

        return this.operator;
    }
}
export class Lt extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $lt: this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value)) } };

        return this.operator;
    }
}
export class Lte extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $lte: this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value)) } };

        return this.operator;
    }
}
export class Gte extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $gte: this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value)) } };

        return this.operator;
    }
}
export class Ne extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $ne: this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value)) } };

        return this.operator;
    }
}
export class RegEndWith extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $regex: new RegExp(this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value)) + "$"), $options: "i" } };

        return this.operator;
    }
}
export class RegStartWith extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $regex: new RegExp("^" + this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value))), $options: "i" } };

        return this.operator;
    }
}
export class RegContains extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $regex: new RegExp(this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value))), $options: "i" } };

        return this.operator;
    }
}
export class Exist extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $exists: true } };

        return this.operator;
    }
}
export class NotExist extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $exists: false } };

        return this.operator;
    }
}
export class In extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $in: [...value.split(":").map(v => new RegExp(v, "i"))] } };

        return this.operator;
    }
}
export class NotIn extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $nin: [...value.split(":").map(v => new RegExp(v, "i"))] } };

        return this.operator;
    }
}
export class Between extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $gte: +value.split(":")[0], $lt: +value.split(":")[1] } };

        return this.operator;
    }
}
