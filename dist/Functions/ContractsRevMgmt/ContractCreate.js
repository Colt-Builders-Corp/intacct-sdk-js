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
const AbstractContract_1 = require("./AbstractContract");
class ContractCreate extends AbstractContract_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create");
        xml.writeStartElement("CONTRACT");
        xml.writeElement("CONTRACTID", this.contractId);
        xml.writeElement("CUSTOMERID", this.customerId, true);
        xml.writeElement("NAME", this.contractName, true);
        xml.writeElement("BILLTOCONTACTNAME", this.billToContactName);
        xml.writeElement("DESCRIPTION", this.description);
        xml.writeElement("SHIPTOCONTACTNAME", this.shipToContactName);
        xml.writeElementDate("BEGINDATE", this.beginDate, IaXmlWriter_1.default.intacctDateFormat);
        xml.writeElementDate("ENDDATE", this.endDate, IaXmlWriter_1.default.intacctDateFormat);
        xml.writeElement("BILLINGFREQUENCY", this.billingFrequency, true);
        xml.writeElement("TERMNAME", this.paymentTerm, true);
        xml.writeElement("PRCLIST", this.billingPriceList);
        xml.writeElement("MEAPRCLIST", this.fairValuePriceList);
        xml.writeElement("SUPDOCID", this.attachmentsId);
        xml.writeElement("LOCATIONID", this.locationId);
        xml.writeElement("DEPARTMENTID", this.departmentId);
        xml.writeElement("PROJECTID", this.projectId);
        xml.writeElement("VENDORID", this.vendorId);
        xml.writeElement("EMPLOYEEID", this.employeeId);
        xml.writeElement("CLASSID", this.classId);
        xml.writeElement("CURRENCY", this.transactionCurrency);
        xml.writeElement("EXCHRATETYPE", this.exchangeRateType);
        xml.writeElement("RENEWAL", this.renewal);
        if (this.renewal === true) {
            xml.writeElement("RENEWALMACRO", this.renewalTemplate);
            xml.writeElement("RENEWTERMLENGTH", this.renewalTermLength);
            xml.writeElement("RENEWTERMPERIOD", this.renewalTermPeriod);
        }
        xml.writeCustomFieldsImplicit(this.customFields);
        xml.writeEndElement(); // CONTRACT
        xml.writeEndElement(); // create
        xml.writeEndElement(); // function
    }
}
exports.default = ContractCreate;
//# sourceMappingURL=ContractCreate.js.map