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
const ApPaymentDetailBill_1 = require("./ApPaymentDetailBill");
const ApPaymentDetailCreditMemo_1 = require("./ApPaymentDetailCreditMemo");
class ApPaymentDetailBuilder {
    constructor() {
        this.detailList = [];
    }
    addApPaymentDetailBill(info) {
        this.detailList.push(new ApPaymentDetailBill_1.default(info));
        return this;
    }
    addApPaymentDetailCreditMemo(info) {
        this.detailList.push(new ApPaymentDetailCreditMemo_1.default(info));
        return this;
    }
    getApPaymentDetailList() {
        return this.detailList;
    }
}
exports.default = ApPaymentDetailBuilder;
//# sourceMappingURL=ApPaymentDetailBuilder.js.map