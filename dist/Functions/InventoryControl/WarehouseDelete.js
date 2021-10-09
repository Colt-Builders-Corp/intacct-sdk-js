"use strict";
/**
 * @module Intacct/SDK/Functions/InventoryControl
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractWarehouse_1 = require("./AbstractWarehouse");
class WarehouseDelete extends AbstractWarehouse_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete");
        xml.writeElement("object", "WAREHOUSE");
        xml.writeElement("keys", this.recordNo, true);
        xml.writeEndElement(); // delete
        xml.writeEndElement(); // function
    }
}
exports.default = WarehouseDelete;
//# sourceMappingURL=WarehouseDelete.js.map