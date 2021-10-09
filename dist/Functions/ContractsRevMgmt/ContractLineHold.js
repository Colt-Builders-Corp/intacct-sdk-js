"use strict";
/**
 * @module Intacct/SDK/Functions/ContractsRevMgmt
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
class ContractLineHold extends AbstractFunction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("hold");
        xml.writeStartElement("CONTRACTDETAIL");
        xml.writeElement("RECORDNO", this.recordNo, true);
        xml.writeElementDate("ASOFDATE", this.asOfDate, IaXmlWriter_1.default.intacctDateFormat, true);
        xml.writeElement("BILLING", this.holdBilling);
        xml.writeElement("REVENUE", this.holdRevenue);
        xml.writeElement("EXPENSE", this.holdExpense);
        xml.writeEndElement(); // CONTRACTDETAIL
        xml.writeEndElement(); // hold
        xml.writeEndElement(); // function
    }
}
exports.default = ContractLineHold;
//# sourceMappingURL=ContractLineHold.js.map