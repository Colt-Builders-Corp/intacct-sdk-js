"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractDepartment_1 = require("./AbstractDepartment");
class DepartmentCreate extends AbstractDepartment_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create");
        xml.writeStartElement("DEPARTMENT");
        xml.writeElement("DEPARTMENTID", this.departmentId, true);
        xml.writeElement("TITLE", this.departmentName, true);
        xml.writeElement("PARENTID", this.parentDepartmentId);
        xml.writeElement("SUPERVISORID", this.managerEmployeeId);
        xml.writeElement("CUSTTITLE", this.departmentTitle);
        if (this.active === true) {
            xml.writeElement("STATUS", "active");
        }
        else if (this.active === false) {
            xml.writeElement("STATUS", "inactive");
        }
        xml.writeCustomFieldsImplicit(this.customFields);
        xml.writeEndElement(); // DEPARTMENT
        xml.writeEndElement(); // create
        xml.writeEndElement(); // function
    }
}
exports.default = DepartmentCreate;
//# sourceMappingURL=DepartmentCreate.js.map