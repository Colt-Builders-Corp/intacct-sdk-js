"use strict";
/**
 * @module Intacct/SDK/Functions/CashManagement
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractChargeCardTransactionLine_1 = require("./AbstractChargeCardTransactionLine");
class ChargeCardTransactionLineUpdate extends AbstractChargeCardTransactionLine_1.default {
    writeXml(xml) {
        xml.writeStartElement("updateccpayitem");
        xml.writeAttribute("line_num", this.lineNo);
        if (this.accountLabel != null) {
            xml.writeElement("accountlabel", this.accountLabel);
        }
        else {
            xml.writeElement("glaccountno", this.glAccountNumber);
        }
        xml.writeElement("description", this.memo);
        xml.writeElement("paymentamount", this.transactionAmount);
        xml.writeElement("departmentid", this.departmentId);
        xml.writeElement("locationid", this.locationId);
        xml.writeElement("customerid", this.customerId);
        xml.writeElement("vendorid", this.vendorId);
        xml.writeElement("employeeid", this.employeeId);
        xml.writeElement("projectid", this.projectId);
        xml.writeElement("itemid", this.itemId);
        xml.writeElement("classid", this.classId);
        xml.writeElement("contractid", this.contractId);
        xml.writeElement("warehouseid", this.warehouseId);
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeEndElement(); // updateccpayitem
    }
}
exports.default = ChargeCardTransactionLineUpdate;
//# sourceMappingURL=ChargeCardTransactionLineUpdate.js.map