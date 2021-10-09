"use strict";
/**
 * @module Intacct/SDK/Functions/EmployeeExpense
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractExpenseAdjustment_1 = require("./AbstractExpenseAdjustment");
class ExpenseAdjustmentDelete extends AbstractExpenseAdjustment_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_expenseadjustmentreport");
        xml.writeAttribute("key", this.recordNo, true);
        xml.writeEndElement(); // delete_expenseadjustmentreport
        xml.writeEndElement(); // function
    }
}
exports.default = ExpenseAdjustmentDelete;
//# sourceMappingURL=ExpenseAdjustmentDelete.js.map