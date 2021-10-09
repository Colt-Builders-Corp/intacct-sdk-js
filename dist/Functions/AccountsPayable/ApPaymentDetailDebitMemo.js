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
const AbstractApPaymentDetailCredit_1 = require("./AbstractApPaymentDetailCredit");
class ApPaymentDetailDebitMemo extends AbstractApPaymentDetailCredit_1.default {
    getKeyType() {
        return "ADJUSTMENTKEY";
    }
    getEntryKeyType() {
        return "ADJUSTMENTENTRYKEY";
    }
    getTransactionType() {
        return "TRX_ADJUSTMENTAMOUNT";
    }
}
exports.default = ApPaymentDetailDebitMemo;
//# sourceMappingURL=ApPaymentDetailDebitMemo.js.map