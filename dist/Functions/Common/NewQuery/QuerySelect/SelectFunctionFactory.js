"use strict";
/**
 * @module Intacct/SDK/Functions/Common/NewQuery/QuerySelect
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Sage Intacct, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "LICENSE" file accompanying this file. This file is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
const AbstractSelectFunction_1 = require("./AbstractSelectFunction");
const Average_1 = require("./Average");
const Count_1 = require("./Count");
const Maximum_1 = require("./Maximum");
const Minimum_1 = require("./Minimum");
const Sum_1 = require("./Sum");
class SelectFunctionFactory {
    /**
     * Returns an AbstractSelectFunction for given functionName
     *
     * @param functionName
     * @param fieldName
     *
     * @return AbstractSelectFunction
     * @throws Error
     */
    create(functionName, fieldName) {
        if (!fieldName) {
            throw new Error(`Field name for ${functionName} cannot be empty or null. Provide a field name for the builder.`);
        }
        switch (functionName) {
            case AbstractSelectFunction_1.default.AVERAGE:
                this.newFunction = new Average_1.default(fieldName);
                break;
            case AbstractSelectFunction_1.default.COUNT:
                this.newFunction = new Count_1.default(fieldName);
                break;
            case AbstractSelectFunction_1.default.MINIMUM:
                this.newFunction = new Minimum_1.default(fieldName);
                break;
            case AbstractSelectFunction_1.default.MAXIMUM:
                this.newFunction = new Maximum_1.default(fieldName);
                break;
            case AbstractSelectFunction_1.default.SUM:
                this.newFunction = new Sum_1.default(fieldName);
                break;
            default:
                throw new Error(functionName + " function doesn't exist.");
        }
        return this.newFunction;
    }
}
exports.default = SelectFunctionFactory;
//# sourceMappingURL=SelectFunctionFactory.js.map