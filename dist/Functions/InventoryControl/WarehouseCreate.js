"use strict";
/**
 * @module Intacct/SDK/Functions/InventoryControl
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractWarehouse_1 = require("./AbstractWarehouse");
class WarehouseCreate extends AbstractWarehouse_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create");
        xml.writeStartElement("WAREHOUSE");
        xml.writeElement("WAREHOUSEID", this.warehouseId, true);
        xml.writeElement("NAME", this.warehouseName, true);
        xml.writeStartElement("LOC");
        xml.writeElement("LOCATIONID", this.locationId);
        xml.writeEndElement(); // LOC
        xml.writeElement("MANAGERID", this.managerEmployeeId);
        xml.writeElement("PARENTID", this.parentWarehouseId);
        if (this.warehouseContactName != null) {
            xml.writeStartElement("CONTACTINFO");
            xml.writeElement("CONTACTNAME", this.warehouseContactName);
            xml.writeEndElement(); // CONTACTINFO
        }
        if (this.shipToContactName != null) {
            xml.writeStartElement("SHIPTO");
            xml.writeElement("CONTACTNAME", this.shipToContactName);
            xml.writeEndElement(); // SHIPTO
        }
        xml.writeElement("USEDINGL", this.usedInGeneralLedger);
        if (this.active === true) {
            xml.writeElement("STATUS", "active");
        }
        else if (this.active === false) {
            xml.writeElement("STATUS", "inactive");
        }
        xml.writeCustomFieldsImplicit(this.customFields);
        xml.writeEndElement(); // WAREHOUSE
        xml.writeEndElement(); // create
        xml.writeEndElement(); // function
    }
}
exports.default = WarehouseCreate;
//# sourceMappingURL=WarehouseCreate.js.map