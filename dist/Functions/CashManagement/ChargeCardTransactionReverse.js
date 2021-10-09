"use strict";
/**
 * @module Intacct/SDK/Functions/CashManagement
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractChargeCardTransaction_1 = require("./AbstractChargeCardTransaction");
class ChargeCardTransactionReverse extends AbstractChargeCardTransaction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("reverse_cctransaction");
        xml.writeAttribute("key", this.recordNo, true);
        xml.writeStartElement("datereversed");
        xml.writeDateSplitElements(this.reverseDate);
        xml.writeEndElement(); // datereversed
        xml.writeElement("memo", this.memo);
        xml.writeEndElement(); // reverse_cctransaction
        xml.writeEndElement(); // function
    }
}
exports.default = ChargeCardTransactionReverse;
//# sourceMappingURL=ChargeCardTransactionReverse.js.map