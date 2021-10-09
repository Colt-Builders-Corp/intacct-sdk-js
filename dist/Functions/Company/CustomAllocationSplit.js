"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractAllocationLine_1 = require("./AbstractAllocationLine");
class CustomAllocationSplit extends AbstractAllocationLine_1.default {
    writeXml(xml) {
        xml.writeStartElement("SPLIT");
        xml.writeElement("AMOUNT", this.amount, true);
        xml.writeElement("LOCATIONID", this.locationId);
        xml.writeElement("DEPARTMENTID", this.departmentId);
        xml.writeElement("PROJECTID", this.projectId);
        xml.writeElement("CUSTOMERID", this.customerId);
        xml.writeElement("VENDORID", this.vendorId);
        xml.writeElement("EMPLOYEEID", this.employeeId);
        xml.writeElement("ITEMID", this.itemId);
        xml.writeElement("CLASSID", this.classId);
        xml.writeElement("CONTRACTID", this.contractId);
        xml.writeElement("WAREHOUSEID", this.warehouseId);
        // TODO Need to implement UDD's for this
        xml.writeEndElement(); // SPLIT
    }
}
exports.default = CustomAllocationSplit;
//# sourceMappingURL=CustomAllocationSplit.js.map