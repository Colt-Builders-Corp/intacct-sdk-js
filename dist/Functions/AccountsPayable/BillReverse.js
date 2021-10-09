"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractBill_1 = require("./AbstractBill");
class BillReverse extends AbstractBill_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("reverse_bill");
        xml.writeAttribute("key", this.recordNo, true);
        xml.writeStartElement("datereversed");
        xml.writeDateSplitElements(this.reverseDate);
        xml.writeEndElement(); // datereversed
        xml.writeElement("description", this.memo);
        xml.writeEndElement(); // reverse_bill
        xml.writeEndElement(); // function
    }
}
exports.default = BillReverse;
//# sourceMappingURL=BillReverse.js.map