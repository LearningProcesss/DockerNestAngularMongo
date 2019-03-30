import { IOperator } from '../interface/IOperator';
import { AbstractOperator } from '../abstract/AbstractOperator';
export class Eq extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        let normalized = this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value));

        if (normalized == null) { return null; }

        this.operator = { [modelPathField]: { $eq: normalized } };

        return this.operator;
    }
}
export class Gt extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        let normalized = this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value));

        if (normalized == null) { return null; }

        this.operator = { [modelPathField]: { $gt: normalized } };

        return this.operator;
    }
}
export class Lt extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        let normalized = this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value));

        if (normalized == null) { return null; }

        this.operator = { [modelPathField]: { $lt: normalized } };

        return this.operator;
    }
}
export class Lte extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        let normalized = this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value));

        if (normalized == null) { return null; }

        this.operator = { [modelPathField]: { $lte: normalized } };

        return this.operator;
    }
}
export class Gte extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        let normalized = this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value));

        if (normalized == null) { return null; }

        this.operator = { [modelPathField]: { $gte: normalized } };

        return this.operator;
    }
}
export class Ne extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        let normalized = this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value));

        if (normalized == null) { return null; }

        this.operator = { [modelPathField]: { $ne: normalized } };

        return this.operator;
    }
}
export class RegEndWith extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        let normalized = this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value));

        if (normalized == null) { return null; }

        this.operator = { [modelPathField]: { $regex: new RegExp(normalized + "$"), $options: "i" } };

        return this.operator;
    }
}
export class RegStartWith extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        let normalized = this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value));

        if (normalized == null) { return null; }

        this.operator = { [modelPathField]: { $regex: new RegExp("^" + normalized), $options: "i" } };

        return this.operator;
    }
}
export class RegContains extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        let normalized = this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value));

        if (normalized == null) { return null; }

        this.operator = { [modelPathField]: { $regex: new RegExp(normalized), $options: "i" } };

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

        let normalized = this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value));

        if (normalized == null) { return null; }

        // this.operator = { [modelPathField]: { $in: [...value.split(":").map(v => new RegExp(v, "i"))] } };
        this.operator = { [modelPathField]: { $in: [...normalized.split(":").map(v => new RegExp(v, "i"))] } };

        return this.operator;
    }
}
export class NotIn extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        let normalized = this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value));

        if (normalized == null) { return null; }

        this.operator = { [modelPathField]: { $nin: [...value.split(":").map(v => new RegExp(v, "i"))] } };

        return this.operator;
    }
}
export class Between extends AbstractOperator implements IOperator {
    operator: object;
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        let normalized = this.convert(modelPathFieldType, this.normalizeString(modelPathFieldType, value));

        if (normalized == null) { return null; }

        this.operator = { [modelPathField]: { $gte: +value.split(":")[0], $lt: +value.split(":")[1] } };

        return this.operator;
    }
}

export class Select extends AbstractOperator implements IOperator {
    operator: object;    
    interpret(modelPathFieldType: string, modelPathField: string, value: string, ...options: object[]): object {

        let normalized = this.tryParseInt(value);

        if (normalized == null) { return null; }

        this.operator = { [modelPathField]: normalized };

        return this.operator;
    }
}
