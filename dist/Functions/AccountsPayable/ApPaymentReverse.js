"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../AbstractFunction");
class ApPaymentReverse extends AbstractFunction_1.default {
    constructor(controlId) {
        super(controlId);
    }
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("reverse_appayment");
        xml.writeAttribute("key", this.recordNo, true);
        xml.writeStartElement("datereversed");
        xml.writeDateSplitElements(this.reverseDate);
        xml.writeEndElement(); // datereversed
        xml.writeElement("description", this.memo);
        xml.writeEndElement(); // reverse_appayment
        xml.writeEndElement(); // function
    }
}
exports.default = ApPaymentReverse;
//# sourceMappingURL=ApPaymentReverse.js.map