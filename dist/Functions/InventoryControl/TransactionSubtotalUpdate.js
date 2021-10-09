"use strict";
/**
 * @module Intacct/SDK/Functions/InventoryControl
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractTransactionSubtotal_1 = require("./AbstractTransactionSubtotal");
class TransactionSubtotalUpdate extends AbstractTransactionSubtotal_1.default {
    writeXml(xml) {
        xml.writeStartElement("updatesubtotal");
        xml.writeElement("description", this.description, true);
        xml.writeElement("total", this.total);
        xml.writeElement("absval", this.absoluteValue);
        xml.writeElement("percentval", this.percentageValue);
        xml.writeElement("locationid", this.locationId);
        xml.writeElement("departmentid", this.departmentId);
        xml.writeElement("projectid", this.projectId);
        xml.writeElement("customerid", this.customerId);
        xml.writeElement("vendorid", this.vendorId);
        xml.writeElement("employeeid", this.employeeId);
        xml.writeElement("classid", this.classId);
        xml.writeElement("itemid", this.itemId);
        xml.writeElement("contractid", this.contractId);
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeEndElement(); // updatesubtotal
    }
}
exports.default = TransactionSubtotalUpdate;
//# sourceMappingURL=TransactionSubtotalUpdate.js.map