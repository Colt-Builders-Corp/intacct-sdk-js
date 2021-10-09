"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsReceivable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractArPayment_1 = require("./AbstractArPayment");
class ArPaymentReverse extends AbstractArPayment_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("reverse_arpayment");
        xml.writeAttribute("key", this.recordNo, true);
        xml.writeStartElement("datereversed");
        xml.writeDateSplitElements(this.reverseDate);
        xml.writeEndElement(); // datereversed
        xml.writeElement("description", this.memo);
        xml.writeEndElement(); // reverse_arpayment
        xml.writeEndElement(); // function
    }
}
exports.default = ArPaymentReverse;
//# sourceMappingURL=ArPaymentReverse.js.map