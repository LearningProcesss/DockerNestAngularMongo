export class AbstractStage {
    constructor() {

    }
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