"use strict";
/**
 * @module Intacct/SDK/Functions/Common/Query/Comparison
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
const AbstractComparison_1 = require("./AbstractComparison");
class AbstractArrayInteger extends AbstractComparison_1.default {
    get valuesList() {
        return this._valuesList;
    }
    set valuesList(values) {
        for (const value of values) {
            if (!Number.isInteger(value)) {
                throw new Error("Value is not an integer");
            }
        }
        this._valuesList = values;
    }
}
exports.default = AbstractArrayInteger;
//# sourceMappingURL=AbstractArrayInteger.js.map