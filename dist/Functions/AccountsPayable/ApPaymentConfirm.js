"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
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
const AbstractApPaymentFunction_1 = require("./AbstractApPaymentFunction");
class ApPaymentConfirm extends AbstractApPaymentFunction_1.default {
    constructor(recordNo, controlId) {
        super(recordNo, controlId);
    }
    getFunction() {
        return AbstractApPaymentFunction_1.default.CONFIRM;
    }
}
exports.default = ApPaymentConfirm;
//# sourceMappingURL=ApPaymentConfirm.js.map