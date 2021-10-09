"use strict";
/**
 * @module Intacct/SDK/Functions/EmployeeExpense
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractReimbursementRequest_1 = require("./AbstractReimbursementRequest");
class ReimbursementRequestCreate extends AbstractReimbursementRequest_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_reimbursementrequest");
        xml.writeElement("bankaccountid", this.bankAccountId, true);
        xml.writeElement("employeeid", this.employeeId, true);
        xml.writeElement("memo", this.memo);
        xml.writeElement("paymentmethod", this.paymentMethod, true);
        xml.writeStartElement("paymentdate");
        xml.writeDateSplitElements(this.paymentDate, true);
        xml.writeEndElement(); // paymentdate
        xml.writeElement("paymentoption", this.mergeOption);
        xml.writeStartElement("eppaymentrequestitems");
        if (this.applyToTransactions != null && this.applyToTransactions.length > 0) {
            for (const applyToTransaction of this.applyToTransactions) {
                applyToTransaction.writeXml(xml);
            }
        }
        xml.writeEndElement(); // eppaymentrequestitems
        xml.writeElement("documentnumber", this.documentNo);
        xml.writeElement("paymentdescription", this.memo);
        xml.writeElement("paymentcontact", this.notificationContactName);
        xml.writeEndElement(); // create_reimbursementrequest
        xml.writeEndElement(); // function
    }
}
exports.default = ReimbursementRequestCreate;
//# sourceMappingURL=ReimbursementRequestCreate.js.map