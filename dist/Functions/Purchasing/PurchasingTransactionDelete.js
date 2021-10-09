"use strict";
/**
 * @module Intacct/SDK/Functions/Purchasing
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractPurchasingTransaction_1 = require("./AbstractPurchasingTransaction");
class PurchasingTransactionDelete extends AbstractPurchasingTransaction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_potransaction");
        // TODO review documentId or transactionId
        xml.writeAttribute("key", this.documentId, true);
        xml.writeEndElement(); // delete_potransaction
        xml.writeEndElement(); // function
    }
}
exports.default = PurchasingTransactionDelete;
//# sourceMappingURL=PurchasingTransactionDelete.js.map