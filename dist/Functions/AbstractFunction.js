"use strict";
/**
 * @module Intacct/SDK/Functions
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
const uuid_1 = require("uuid");
class AbstractFunction {
    constructor(controlId) {
        this.controlId = controlId;
    }
    get controlId() {
        return this._controlId;
    }
    set controlId(controlId) {
        if (controlId == null || controlId === "") {
            controlId = uuid_1.v4();
        }
        if (controlId.length < 1 || controlId.length > 256) {
            throw new Error("Function control ID must be between 1 and 256 characters in length.");
        }
        this._controlId = controlId;
    }
}
exports.default = AbstractFunction;
//# sourceMappingURL=AbstractFunction.js.map