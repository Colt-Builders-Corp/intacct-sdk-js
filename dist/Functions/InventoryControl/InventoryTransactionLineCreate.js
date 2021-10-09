"use strict";
/**
 * @module Intacct/SDK/Functions/InventoryControl
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractInventoryTransactionLine_1 = require("./AbstractInventoryTransactionLine");
class InventoryTransactionLineCreate extends AbstractInventoryTransactionLine_1.default {
    writeXml(xml) {
        xml.writeStartElement("ictransitem");
        xml.writeElement("itemid", this.itemId, true);
        xml.writeElement("itemdesc", this.itemDescription);
        xml.writeElement("warehouseid", this.warehouseId);
        xml.writeElement("quantity", this.quantity, true);
        xml.writeElement("unit", this.unit);
        xml.writeElement("cost", this.cost);
        xml.writeElement("locationid", this.locationId);
        xml.writeElement("departmentid", this.departmentId);
        if (this.itemDetails != null && this.itemDetails.length > 0) {
            xml.writeStartElement("itemdetails");
            for (const itemDetail of this.itemDetails) {
                itemDetail.writeXml(xml);
            }
            xml.writeEndElement(); // itemdetails
        }
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeElement("projectid", this.projectId);
        xml.writeElement("customerid", this.customerId);
        xml.writeElement("vendorid", this.vendorId);
        xml.writeElement("employeeid", this.employeeId);
        xml.writeElement("classid", this.classId);
        xml.writeElement("contractid", this.contractId);
        xml.writeEndElement(); // ictransitem
    }
}
exports.default = InventoryTransactionLineCreate;
//# sourceMappingURL=InventoryTransactionLineCreate.js.map