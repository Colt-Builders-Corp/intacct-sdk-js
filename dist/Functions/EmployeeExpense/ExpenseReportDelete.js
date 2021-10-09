"use strict";
/**
 * @module Intacct/SDK/Functions/EmployeeExpense
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractExpenseReport_1 = require("./AbstractExpenseReport");
class ExpenseReportDelete extends AbstractExpenseReport_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_expensereport");
        xml.writeAttribute("key", this.recordNo, true);
        xml.writeEndElement(); // delete_expensereport
        xml.writeEndElement(); // function
    }
}
exports.default = ExpenseReportDelete;
//# sourceMappingURL=ExpenseReportDelete.js.map