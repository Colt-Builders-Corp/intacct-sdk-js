"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractDepartment_1 = require("./AbstractDepartment");
class DepartmentDelete extends AbstractDepartment_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_department");
        xml.writeAttribute("departmentid", this.departmentId, true);
        xml.writeEndElement(); // delete_department
        xml.writeEndElement(); // function
    }
}
exports.default = DepartmentDelete;
//# sourceMappingURL=DepartmentDelete.js.map