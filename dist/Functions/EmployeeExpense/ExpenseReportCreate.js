"use strict";
/**
 * @module Intacct/SDK/Functions/EmployeeExpense
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractExpenseReport_1 = require("./AbstractExpenseReport");
class ExpenseReportCreate extends AbstractExpenseReport_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_expensereport");
        xml.writeElement("employeeid", this.employeeId, true);
        xml.writeStartElement("datecreated");
        xml.writeDateSplitElements(this.transactionDate);
        xml.writeEndElement(); // datecreated
        if (this.glPostingDate != null) {
            xml.writeStartElement("dateposted");
            xml.writeDateSplitElements(this.glPostingDate);
            xml.writeEndElement(); // dateposted
        }
        xml.writeElement("batchkey", this.summaryRecordNo);
        xml.writeElement("expensereportno", this.expenseReportNumber);
        xml.writeElement("state", this.action);
        xml.writeElement("description", this.reasonForExpense);
        xml.writeElement("memo", this.memo);
        xml.writeElement("externalid", this.externalId);
        xml.writeElement("basecurr", this.baseCurrency);
        xml.writeElement("currency", this.reimbursementCurrency);
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeElement("supdocid", this.attachmentsId);
        xml.writeStartElement("expenses");
        if (this.lines != null && this.lines.length > 0) {
            for (const line of this.lines) {
                line.writeXml(xml);
            }
        }
        xml.writeEndElement(); // expenses
        xml.writeEndElement(); // create_expensereport
        xml.writeEndElement(); // function
    }
}
exports.default = ExpenseReportCreate;
//# sourceMappingURL=ExpenseReportCreate.js.map