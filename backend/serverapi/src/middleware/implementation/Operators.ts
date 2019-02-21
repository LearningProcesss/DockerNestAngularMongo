import { IOperator } from '../interface/IOperator';
export class Eq implements IOperator {
    operator: object;
    interpret(modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $eq: value } };

        return this.operator;
    }
}
export class Gt implements IOperator {
    operator: object;
    interpret(modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $gt: value } };

        return this.operator;
    }
}
export class Lt implements IOperator {
    operator: object;
    interpret(modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $lt: value } };

        return this.operator;
    }
}
export class Lte implements IOperator {
    operator: object;
    interpret(modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $lte: value } };

        return this.operator;
    }
}
export class Gte implements IOperator {
    operator: object;
    interpret(modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $gte: value } };

        return this.operator;
    }
}
export class Ne implements IOperator {
    operator: object;
    interpret(modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $ne: value } };

        return this.operator;
    }
}
export class RegEndWith implements IOperator {
    operator: object;
    interpret(modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $regex: new RegExp(value + "$"), $options: "i" } };

        return this.operator;
    }
}
export class RegStartWith implements IOperator {
    operator: object;
    interpret(modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $regex: new RegExp("^" + value), $options: "i" } };

        return this.operator;
    }
}
export class RegContains implements IOperator {
    operator: object;
    interpret(modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $regex: new RegExp(value), $options: "i" } };

        return this.operator;
    }
}
export class Exist implements IOperator {
    operator: object;
    interpret(modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $exists: true } };

        return this.operator;
    }
}
export class NotExist implements IOperator {
    operator: object;
    interpret(modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $exists: false } };

        return this.operator;
    }
}
export class In implements IOperator {
    operator: object;
    interpret(modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $in: [...value.split(":").map(v => new RegExp(v, "i"))] } };

        return this.operator;
    }
}
export class NotIn implements IOperator {
    operator: object;
    interpret(modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $nin: [...value.split(":").map(v => new RegExp(v, "i"))] } };

        return this.operator;
    }
}
export class Between implements IOperator {
    operator: object;
    interpret(modelPathField: string, value: string, ...options: object[]): object {

        this.operator = { [modelPathField]: { $gte: +value.split(":")[0], $lt: +value.split(":")[1] } };

        return this.operator;
    }
}
