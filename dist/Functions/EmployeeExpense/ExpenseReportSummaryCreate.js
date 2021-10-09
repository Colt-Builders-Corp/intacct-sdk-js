"use strict";
/**
 * @module Intacct/SDK/Functions/EmployeeExpense
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractExpenseReportSummary_1 = require("./AbstractExpenseReportSummary");
class ExpenseReportSummaryCreate extends AbstractExpenseReportSummary_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_expensereportbatch");
        xml.writeElement("batchtitle", this.title, true);
        if (this.glPostingDate != null) {
            xml.writeStartElement("datecreated");
            xml.writeDateSplitElements(this.glPostingDate);
            xml.writeEndElement(); // datecreated
        }
        xml.writeEndElement(); // create_expensereportbatch
        xml.writeEndElement(); // function
    }
}
exports.default = ExpenseReportSummaryCreate;
//# sourceMappingURL=ExpenseReportSummaryCreate.js.map