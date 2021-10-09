"use strict";
/**
 * @module Intacct/SDK/Functions/EmployeeExpense
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ReimbursementRequestItem {
    writeXml(xml) {
        xml.writeStartElement("eppaymentrequestitem");
        xml.writeElement("key", this.applyToRecordId, true);
        xml.writeElement("paymentamount", this.amountToApply, true);
        xml.writeElement("credittoapply", this.creditToApply);
        xml.writeEndElement(); // eppaymentrequestitem
    }
}
exports.default = ReimbursementRequestItem;
//# sourceMappingURL=ReimbursementRequestItem.js.map