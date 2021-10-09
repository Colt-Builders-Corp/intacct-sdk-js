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
const IntacctException_1 = require("../../Exceptions/IntacctException");
const AbstractApPaymentFunction_1 = require("./AbstractApPaymentFunction");
const ApPaymentApprove_1 = require("./ApPaymentApprove");
const ApPaymentConfirm_1 = require("./ApPaymentConfirm");
const ApPaymentDecline_1 = require("./ApPaymentDecline");
const ApPaymentDelete_1 = require("./ApPaymentDelete");
const ApPaymentSend_1 = require("./ApPaymentSend");
const ApPaymentVoid_1 = require("./ApPaymentVoid");
class ApPaymentFactory {
    static create(type, recordno, controlId) {
        let apPaymentFunction;
        switch (type) {
            case AbstractApPaymentFunction_1.default.DELETE:
                apPaymentFunction = new ApPaymentDelete_1.default(recordno, controlId);
                break;
            case AbstractApPaymentFunction_1.default.DECLINE:
                apPaymentFunction = new ApPaymentDecline_1.default(recordno, controlId);
                break;
            case AbstractApPaymentFunction_1.default.CONFIRM:
                apPaymentFunction = new ApPaymentConfirm_1.default(recordno, controlId);
                break;
            case AbstractApPaymentFunction_1.default.APPROVE:
                apPaymentFunction = new ApPaymentApprove_1.default(recordno, controlId);
                break;
            case AbstractApPaymentFunction_1.default.SEND:
                apPaymentFunction = new ApPaymentSend_1.default(recordno, controlId);
                break;
            case AbstractApPaymentFunction_1.default.VOID:
                apPaymentFunction = new ApPaymentVoid_1.default(recordno, controlId);
                break;
            default:
                throw new IntacctException_1.default("Cannot generate" + type + ".");
        }
        return apPaymentFunction;
    }
}
exports.default = ApPaymentFactory;
//# sourceMappingURL=ApPaymentFactory.js.map