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
const ApPaymentDetailAdvance_1 = require("./ApPaymentDetailAdvance");
const ApPaymentDetailDebitMemo_1 = require("./ApPaymentDetailDebitMemo");
const ApPaymentDetailNegativeBill_1 = require("./ApPaymentDetailNegativeBill");
class ApPaymentDetailCreditFactory {
    create(type, recordNo, lineRecordNo, transactionAmount) {
        let detailCredit;
        switch (type) {
            case AbstractApPaymentDetailCredit_1.default.NEGATIVE_BILL:
                detailCredit = new ApPaymentDetailNegativeBill_1.default();
                break;
            case AbstractApPaymentDetailCredit_1.default.DEBIT_MEMO:
                detailCredit = new ApPaymentDetailDebitMemo_1.default();
                break;
            case AbstractApPaymentDetailCredit_1.default.ADVANCE:
                detailCredit = new ApPaymentDetailAdvance_1.default();
                break;
            default:
                throw new Error("Credit " + type + " doesn't exist.");
        }
        detailCredit.recordNo = recordNo;
        detailCredit.lineRecordNo = lineRecordNo;
        detailCredit.transactionAmount = transactionAmount;
        return detailCredit;
    }
}
exports.default = ApPaymentDetailCreditFactory;
//# sourceMappingURL=ApPaymentDetailCreditFactory.js.map