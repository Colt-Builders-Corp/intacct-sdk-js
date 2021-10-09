"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsReceivable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractArPayment_1 = require("./AbstractArPayment");
class ArPaymentCreate extends AbstractArPayment_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_arpayment");
        xml.writeElement("customerid", this.customerId, true);
        xml.writeElement("paymentamount", this.transactionPaymentAmount, true);
        xml.writeElement("translatedamount", this.basePaymentAmount);
        if (this.undepositedFundsGlAccountNo != null) {
            xml.writeElement("undepfundsacct", this.undepositedFundsGlAccountNo);
        }
        else if (this.summaryRecordNo != null) {
            xml.writeElement("batchkey", this.summaryRecordNo);
        }
        else {
            xml.writeElement("bankaccountid", this.bankAccountId);
        }
        xml.writeElement("refid", this.referenceNumber);
        xml.writeElement("overpaylocid", this.overpaymentLocationId);
        xml.writeElement("overpaydeptid", this.overpaymentDepartmentId);
        xml.writeStartElement("datereceived");
        xml.writeDateSplitElements(this.receivedDate, true);
        xml.writeEndElement(); // datereceived
        xml.writeElement("paymentmethod", this.paymentMethod, true);
        xml.writeElement("basecurr", this.baseCurrency);
        xml.writeElement("currency", this.transactionCurrency);
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
        else if (this.baseCurrency != null || this.transactionCurrency != null) {
            xml.writeElement("exchratetype", this.exchangeRateType, true);
        }
        xml.writeElement("cctype", this.creditCardType);
        xml.writeElement("authcode", this.authorizationCode);
        if (this.applyToTransactions != null && this.applyToTransactions.length > 0) {
            for (const applyToTransaction of this.applyToTransactions) {
                applyToTransaction.writeXml(xml);
            }
        }
        // TODO online payment methods
        xml.writeEndElement(); // create_arpayment
        xml.writeEndElement(); // function
    }
}
exports.default = ArPaymentCreate;
//# sourceMappingURL=ArPaymentCreate.js.map