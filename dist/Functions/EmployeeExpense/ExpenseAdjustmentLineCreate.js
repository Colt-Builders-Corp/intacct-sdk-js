"use strict";
/**
 * @module Intacct/SDK/Functions/EmployeeExpense
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractExpenseAdjustmentLine_1 = require("./AbstractExpenseAdjustmentLine");
class ExpenseAdjustmentLineCreate extends AbstractExpenseAdjustmentLine_1.default {
    writeXml(xml) {
        xml.writeStartElement("expenseadjustment");
        if (this.expenseType != null) {
            xml.writeElement("expensetype", this.expenseType, true);
        }
        else {
            xml.writeElement("glaccountno", this.glAccountNumber, true);
        }
        xml.writeElement("amount", this.reimbursementAmount, true);
        xml.writeElement("currency", this.transactionCurrency);
        xml.writeElement("trx_amount", this.transactionAmount);
        if (this.exchangeRateDate != null) {
            xml.writeStartElement("exchratedate");
            xml.writeDateSplitElements(this.exchangeRateDate);
            xml.writeEndElement(); // exchratedate
        }
        if (this.exchangeRateType != null) {
            xml.writeElement("exchratetype", this.exchangeRateType);
        }
        else if (this.exchangeRateValue != null) {
            xml.writeElement("exchrate", this.exchangeRateValue);
        }
        else if (this.transactionCurrency != null || this.transactionAmount != null) {
            xml.writeElement("exchratetype", this.exchangeRateType, true);
        }
        if (this.expenseDate != null) {
            xml.writeStartElement("expensedate");
            xml.writeDateSplitElements(this.expenseDate, true);
            xml.writeEndElement(); // expensedate
        }
        xml.writeElement("memo", this.memo);
        xml.writeElement("locationid", this.locationId);
        xml.writeElement("departmentid", this.departmentId);
        xml.writeElement("projectid", this.projectId);
        xml.writeElement("customerid", this.customerId);
        xml.writeElement("vendorid", this.vendorId);
        xml.writeElement("employeeid", this.employeeId);
        xml.writeElement("itemid", this.itemId);
        xml.writeElement("classid", this.classId);
        xml.writeElement("contractid", this.contractId);
        xml.writeElement("warehouseid", this.warehouseId);
        xml.writeElement("billable", this.billable);
        xml.writeElement("exppmttype", this.paymentTypeName);
        xml.writeElement("quantity", this.quantity);
        xml.writeElement("rate", this.unitRate);
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeEndElement(); // expenseadjustment
    }
}
exports.default = ExpenseAdjustmentLineCreate;
//# sourceMappingURL=ExpenseAdjustmentLineCreate.js.map