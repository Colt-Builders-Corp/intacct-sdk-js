"use strict";
/**
 * @module Intacct/SDK/Functions/EmployeeExpense
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractExpenseReport_1 = require("./AbstractExpenseReport");
class ExpenseReportReverse extends AbstractExpenseReport_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("reverse_expensereport");
        xml.writeAttribute("key", this.recordNo);
        xml.writeStartElement("datereversed");
        xml.writeDateSplitElements(this.reverseDate);
        xml.writeEndElement(); // datereversed
        xml.writeElement("description", this.memo);
        xml.writeEndElement(); // reverse_expensereport
        xml.writeEndElement(); // function
    }
}
exports.default = ExpenseReportReverse;
//# sourceMappingURL=ExpenseReportReverse.js.map