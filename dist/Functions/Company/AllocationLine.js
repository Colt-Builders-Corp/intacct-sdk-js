"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractAllocationLine_1 = require("./AbstractAllocationLine");
class AllocationLine extends AbstractAllocationLine_1.default {
    writeXml(xml) {
        xml.writeStartElement("ALLOCATIONENTRY");
        xml.writeElement("VALUE", this.amount, true);
        xml.writeElement("LOCATIONID", this.locationId, true);
        xml.writeElement("DEPARTMENTID", this.departmentId);
        xml.writeElement("PROJECTID", this.projectId);
        xml.writeElement("CUSTOMERID", this.customerId);
        xml.writeElement("VENDORID", this.vendorId);
        xml.writeElement("EMPLOYEEID", this.employeeId);
        xml.writeElement("ITEMID", this.itemId);
        xml.writeElement("CLASSID", this.classId);
        xml.writeElement("CONTRACTID", this.contractId);
        xml.writeElement("WAREHOUSEID", this.warehouseId);
        xml.writeEndElement(); // ALLOCATIONENTRY
    }
}
exports.default = AllocationLine;
//# sourceMappingURL=AllocationLine.js.map