"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsReceivable
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ArPaymentItem {
    writeXml(xml) {
        xml.writeStartElement("arpaymentitem");
        xml.writeElement("invoicekey", this.applyToRecordId, true);
        xml.writeElement("amount", this.amountToApply, true);
        xml.writeEndElement(); // arpaymentitem
    }
}
exports.default = ArPaymentItem;
//# sourceMappingURL=ArPaymentItem.js.map