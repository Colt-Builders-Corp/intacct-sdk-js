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
const AbstractFunction_1 = require("../AbstractFunction");
class ApPaymentCreate extends AbstractFunction_1.default {
    constructor(apPaymentInfo, controlId) {
        super(controlId);
        this.apPaymentInfo = apPaymentInfo;
    }
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create");
        xml.writeStartElement("APPYMT");
        xml.writeElement("PAYMENTMETHOD", this.apPaymentInfo.paymentMethod, true);
        xml.writeElement("FINANCIALENTITY", this.apPaymentInfo.financialEntityId, true);
        xml.writeElement("VENDORID", this.apPaymentInfo.vendorId, true);
        xml.writeElement("PAYMENTREQUESTMETHOD", this.apPaymentInfo.mergeOption);
        xml.writeElement("GROUPPAYMENTS", this.apPaymentInfo.groupPayments);
        if (this.apPaymentInfo.exchangeRateDate != null) {
            xml.writeElementDate("EXCH_RATE_DATE", this.apPaymentInfo.exchangeRateDate, IaXmlWriter_1.default.intacctDateFormat);
        }
        xml.writeElement("EXCH_RATE_TYPE_ID", this.apPaymentInfo.exchangeRateType);
        xml.writeElement("DOCNUMBER", this.apPaymentInfo.documentNo);
        xml.writeElement("DESCRIPTION", this.apPaymentInfo.memo);
        xml.writeElement("PAYMENTCONTACT", this.apPaymentInfo.notificationContactName);
        xml.writeElementDate("PAYMENTDATE", this.apPaymentInfo.paymentDate, IaXmlWriter_1.default.intacctDateFormat, true);
        xml.writeElement("CURRENCY", this.apPaymentInfo.transactionCurrency);
        xml.writeElement("BASECURR", this.apPaymentInfo.baseCurrency);
        xml.writeElement("AMOUNTTOPAY", this.apPaymentInfo.transactionAmountPaid);
        xml.writeElement("ACTION", this.apPaymentInfo.action);
        if (this.apPaymentInfo.apPaymentDetails && this.apPaymentInfo.apPaymentDetails.length > 0) {
            xml.writeStartElement("APPYMTDETAILS");
            for (const apPaymentDetail of this.apPaymentInfo.apPaymentDetails) {
                apPaymentDetail.writeXml(xml);
            }
            xml.writeEndElement(); // APPYMTDETAILS
        }
        xml.writeEndElement(); // APPYMT
        xml.writeEndElement(); // create
        xml.writeEndElement(); // function
    }
}
exports.default = ApPaymentCreate;
//# sourceMappingURL=ApPaymentCreate.js.map