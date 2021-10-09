"use strict";
/**
 * @module Intacct/SDK/Functions/EmployeeExpense
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractEmployee_1 = require("./AbstractEmployee");
class EmployeeDelete extends AbstractEmployee_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_employee");
        xml.writeAttribute("employeeid", this.employeeId, true);
        xml.writeEndElement(); // delete_employee
        xml.writeEndElement(); // function
    }
}
exports.default = EmployeeDelete;
//# sourceMappingURL=EmployeeDelete.js.map