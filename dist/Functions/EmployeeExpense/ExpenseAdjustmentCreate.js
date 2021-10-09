"use strict";
/**
 * @module Intacct/SDK/Functions/EmployeeExpense
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractExpenseAdjustment_1 = require("./AbstractExpenseAdjustment");
class ExpenseAdjustmentCreate extends AbstractExpenseAdjustment_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_expenseadjustmentreport");
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
        xml.writeElement("adjustmentno", this.expenseAdjustmentNumber);
        xml.writeElement("docnumber", this.expenseReportNumber);
        xml.writeElement("description", this.description);
        xml.writeElement("basecurr", this.baseCurrency);
        xml.writeElement("currency", this.reimbursementCurrency);
        // Current schema does not allow custom fields
        // xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeStartElement("expenseadjustments");
        if (this.lines != null && this.lines.length > 0) {
            for (const line of this.lines) {
                line.writeXml(xml);
            }
        }
        xml.writeEndElement(); // expenseadjustments
        xml.writeElement("supdocid", this.attachmentsId);
        xml.writeEndElement(); // create_expenseadjustmentreport
        xml.writeEndElement(); // function
    }
}
exports.default = ExpenseAdjustmentCreate;
//# sourceMappingURL=ExpenseAdjustmentCreate.js.map