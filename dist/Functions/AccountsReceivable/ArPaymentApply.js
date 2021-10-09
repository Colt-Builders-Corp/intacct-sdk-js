"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsReceivable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractArPayment_1 = require("./AbstractArPayment");
class ArPaymentApply extends AbstractArPayment_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("apply_arpayment");
        xml.writeElement("arpaymentkey", this.recordNo, true);
        xml.writeStartElement("paymentdate");
        xml.writeDateSplitElements(this.receivedDate, true);
        xml.writeEndElement(); // paymentdate
        xml.writeElement("batchkey", this.summaryRecordNo);
        xml.writeElement("memo", this.memo);
        xml.writeElement("overpaylocid", this.overpaymentLocationId);
        xml.writeElement("overpaydeptid", this.overpaymentDepartmentId);
        if (this.applyToTransactions != null && this.applyToTransactions.length > 0) {
            xml.writeStartElement("arpaymentitems");
            for (const applyToTransaction of this.applyToTransactions) {
                applyToTransaction.writeXml(xml);
            }
            xml.writeEndElement(); // arpaymentitems
        }
        xml.writeEndElement(); // apply_arpayment
        xml.writeEndElement(); // function
    }
}
exports.default = ArPaymentApply;
//# sourceMappingURL=ArPaymentApply.js.map