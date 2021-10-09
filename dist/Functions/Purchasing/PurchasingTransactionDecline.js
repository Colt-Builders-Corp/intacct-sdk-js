"use strict";
/**
 * @module Intacct/SDK/Functions/Purchasing
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractPurchasingTransaction_1 = require("./AbstractPurchasingTransaction");
class PurchasingTransactionDecline extends AbstractPurchasingTransaction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("decline");
        xml.writeStartElement("PODOCUMENT");
        xml.writeElement("DOCID", this.externalId);
        xml.writeElement("COMMENT", this.comment);
        xml.writeEndElement(); // PODOCUMENT
        xml.writeEndElement(); // decline
        xml.writeEndElement(); // function
    }
}
exports.default = PurchasingTransactionDecline;
//# sourceMappingURL=PurchasingTransactionDecline.js.map