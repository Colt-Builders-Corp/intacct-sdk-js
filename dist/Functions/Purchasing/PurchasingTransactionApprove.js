"use strict";
/**
 * @module Intacct/SDK/Functions/Purchasing
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractPurchasingTransaction_1 = require("./AbstractPurchasingTransaction");
class PurchasingTransactionApprove extends AbstractPurchasingTransaction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("approve");
        xml.writeStartElement("PODOCUMENT");
        xml.writeElement("DOCID", this.externalId);
        xml.writeElement("COMMENT", this.comment);
        xml.writeEndElement(); // PODOCUMENT
        xml.writeEndElement(); // approve
        xml.writeEndElement(); // function
    }
}
exports.default = PurchasingTransactionApprove;
//# sourceMappingURL=PurchasingTransactionApprove.js.map