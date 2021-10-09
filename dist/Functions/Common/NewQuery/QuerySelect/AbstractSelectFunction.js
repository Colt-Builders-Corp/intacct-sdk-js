"use strict";
/**
 * @module Intacct/SDK/Functions/Common/NewQuery/QuerySelect
 */
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractSelectFunction {
    constructor(fieldName) {
        this.fieldName = fieldName;
        if (!fieldName) {
            throw new Error("Field name for select cannot be empty or null. " +
                "Provide a field name for the builder.");
        }
        this.fieldName = fieldName;
    }
    writeXml(xml) {
        xml.writeElement(this.getFunctionName(), this.fieldName, false);
    }
}
exports.default = AbstractSelectFunction;
AbstractSelectFunction.AVERAGE = "avg";
AbstractSelectFunction.MINIMUM = "min";
AbstractSelectFunction.MAXIMUM = "max";
AbstractSelectFunction.COUNT = "count";
AbstractSelectFunction.SUM = "sum";
//# sourceMappingURL=AbstractSelectFunction.js.map