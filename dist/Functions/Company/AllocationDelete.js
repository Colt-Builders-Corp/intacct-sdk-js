"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractAllocation_1 = require("./AbstractAllocation");
class AllocationDelete extends AbstractAllocation_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_allocation");
        xml.writeAttribute("key", this.allocationId, true);
        xml.writeEndElement(); // delete_allocation
        xml.writeEndElement(); // function
    }
}
exports.default = AllocationDelete;
//# sourceMappingURL=AllocationDelete.js.map