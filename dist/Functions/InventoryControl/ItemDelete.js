"use strict";
/**
 * @module Intacct/SDK/Functions/InventoryControl
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractItem_1 = require("./AbstractItem");
class ItemDelete extends AbstractItem_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_item");
        xml.writeAttribute("itemid", this.itemId, true);
        xml.writeEndElement(); // delete_item
        xml.writeEndElement(); // function
    }
}
exports.default = ItemDelete;
//# sourceMappingURL=ItemDelete.js.map