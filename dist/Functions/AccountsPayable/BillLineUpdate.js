"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractBillLine_1 = require("./AbstractBillLine");
class BillLineUpdate extends AbstractBillLine_1.default {
    writeXml(xml) {
        xml.writeStartElement("updatelineitem");
        xml.writeAttribute("line_num", this.lineNo);
        if (this.accountLabel != null) {
            xml.writeElement("accountlabel", this.accountLabel);
        }
        else if (this.glAccountNumber != null) {
            xml.writeElement("glaccountno", this.glAccountNumber);
        }
        xml.writeElement("offsetglaccountno", this.offsetGlAccountNumber);
        xml.writeElement("amount", this.transactionAmount);
        xml.writeElement("allocationid", this.allocationId);
        xml.writeElement("memo", this.memo);
        xml.writeElement("locationid", this.locationId);
        xml.writeElement("departmentid", this.departmentId);
        xml.writeElement("item1099", this.form1099);
        xml.writeElement("key", this.key);
        xml.writeElement("totalpaid", this.totalPaid);
        xml.writeElement("totaldue", this.totalDue);
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeElement("projectid", this.projectId);
        xml.writeElement("customerid", this.customerId);
        xml.writeElement("vendorid", this.vendorId);
        xml.writeElement("employeeid", this.employeeId);
        xml.writeElement("itemid", this.itemId);
        xml.writeElement("classid", this.classId);
        xml.writeElement("contractid", this.contractId);
        xml.writeElement("warehouseid", this.warehouseId);
        xml.writeElement("billable", this.billable);
        xml.writeEndElement(); // updatelineitem
    }
}
exports.default = BillLineUpdate;
//# sourceMappingURL=BillLineUpdate.js.map