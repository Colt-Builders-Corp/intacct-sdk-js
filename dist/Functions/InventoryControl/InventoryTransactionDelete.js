"use strict";
/**
 * @module Intacct/SDK/Functions/InventoryControl
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractInventoryTransaction_1 = require("./AbstractInventoryTransaction");
class InventoryTransactionDelete extends AbstractInventoryTransaction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_ictransaction");
        xml.writeAttribute("key", this.documentId, true);
        xml.writeEndElement(); // delete_ictransaction
        xml.writeEndElement(); // function
    }
}
exports.default = InventoryTransactionDelete;
//# sourceMappingURL=InventoryTransactionDelete.js.map