export abstract class AbstractOperator {

    protected convert(modelPathFieldType: string, value: string): any {

        if (modelPathFieldType == "String") {
            return value;
        }
        else if (modelPathFieldType == "Number") {
            return this.tryParseInt(value);
        }

        return null;
    }

    protected normalizeString(modelPathFieldType: string, value: string): any {

        if (modelPathFieldType == "String") {
            if (value.startsWith("(") && value.endsWith(")")) {
                let o = value.substring(1, value.length - 1);
                return value.substring(1, value.length - 1);
            }
        }

        return value;
    }

    /** Try convert a string value as number.
     *  If not possible retunr 0.
    */
    protected tryParseInt(value: string) {

        var retValue: number;

        if (value !== null) {

            if (value.length > 0) {

                try {
                    retValue = Number(value);
                } catch (error) {

                }

                if (!isNaN(retValue)) {

                    return retValue;
                }
            }
        }

        return null;
    }
}