"use strict";
/**
 * @module Intacct/SDK/Functions/OrderEntry
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractOrderEntryTransaction_1 = require("./AbstractOrderEntryTransaction");
class OrderEntryTransactionDelete extends AbstractOrderEntryTransaction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_sotransaction");
        // TODO review documentId or transactionId
        xml.writeAttribute("key", this.documentId, true);
        xml.writeEndElement(); // delete_sotransaction
        xml.writeEndElement(); // function
    }
}
exports.default = OrderEntryTransactionDelete;
//# sourceMappingURL=OrderEntryTransactionDelete.js.map