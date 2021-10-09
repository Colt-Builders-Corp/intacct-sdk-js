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
const IaXmlWriter_1 = require("../../Xml/IaXmlWriter");
class ApPaymentDetailBill {
    constructor(info) {
        this.info = info;
    }
    writeXml(xml) {
        xml.writeStartElement("APPYMTDETAIL");
        xml.writeElement("RECORDKEY", this.info.recordNo, true);
        xml.writeElement("ENTRYKEY", this.info.lineRecordNo);
        if (this.info.applyToDiscountDate != null) {
            xml.writeElementDate("DISCOUNTDATE", this.info.applyToDiscountDate, IaXmlWriter_1.default.intacctDateFormat);
        }
        else {
            xml.writeElement("DISCOUNTTOAPPLY", this.info.discountToApply);
        }
        if (this.info.detailTransaction != null) {
            this.info.detailTransaction.writeXml(xml);
        }
        else {
            xml.writeElement("CREDITTOAPPLY", this.info.creditToApply);
        }
        xml.writeElement("TRX_PAYMENTAMOUNT", this.info.paymentAmount);
        xml.writeEndElement(); // APPYMTDETAIL
    }
}
exports.default = ApPaymentDetailBill;
//# sourceMappingURL=ApPaymentDetailBill.js.map