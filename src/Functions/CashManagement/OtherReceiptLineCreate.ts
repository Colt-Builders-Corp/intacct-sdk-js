/**
 * @module Intacct/SDK/Functions/CashManagement
 */

/**
 * Copyright 2019 Sage Intacct, Inc.
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

import IaXmlWriter from "../../Xml/IaXmlWriter";
import AbstractOtherReceiptLine from "./AbstractOtherReceiptLine";

export default class OtherReceiptLineCreate extends AbstractOtherReceiptLine {

    public writeXml(xml: IaXmlWriter): void {
        xml.writeStartElement("lineitem");

        if (this.accountLabel != null) {
            xml.writeElement("accountlabel", this.accountLabel, true);
        } else {
            xml.writeElement("glaccountno", this.glAccountNumber, true);
        }

        xml.writeElement("amount", this.transactionAmount, true);
        xml.writeElement("memo", this.memo);
        xml.writeElement("locationid", this.locationId);
        xml.writeElement("departmentid", this.departmentId);

        xml.writeCustomFieldsExplicit(this.customFields);

        xml.writeElement("projectid", this.projectId);
        xml.writeElement("customerid", this.customerId);
        xml.writeElement("vendorid", this.vendorId);
        xml.writeElement("employeeid", this.employeeId);
        xml.writeElement("itemid", this.itemId);
        xml.writeElement("classid", this.classId);
        xml.writeElement("contractid", this.contractId);
        xml.writeElement("warehouseid", this.warehouseId);

        xml.writeEndElement(); // lineitem
    }
}
