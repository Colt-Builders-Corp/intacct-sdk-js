"use strict";
/**
 * @module Intacct/SDK/Functions/CashManagement
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractOtherReceiptLine_1 = require("./AbstractOtherReceiptLine");
class OtherReceiptLineCreate extends AbstractOtherReceiptLine_1.default {
    writeXml(xml) {
        xml.writeStartElement("lineitem");
        if (this.accountLabel != null) {
            xml.writeElement("accountlabel", this.accountLabel, true);
        }
        else {
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
exports.default = OtherReceiptLineCreate;
//# sourceMappingURL=OtherReceiptLineCreate.js.map