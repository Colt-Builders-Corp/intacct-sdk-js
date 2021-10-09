"use strict";
/**
 * @module Intacct/SDK/Functions/CashManagement
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractOtherReceipt_1 = require("./AbstractOtherReceipt");
class OtherReceiptCreate extends AbstractOtherReceipt_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("record_otherreceipt");
        xml.writeStartElement("paymentdate");
        xml.writeDateSplitElements(this.transactionDate);
        xml.writeEndElement(); // paymentdate
        xml.writeElement("payee", this.payer, true);
        xml.writeStartElement("receiveddate");
        xml.writeDateSplitElements(this.receiptDate);
        xml.writeEndElement(); // receiveddate
        xml.writeElement("paymentmethod", this.paymentMethod, true);
        if (this.bankAccountId != null || this.depositDate != null) {
            xml.writeElement("bankaccountid", this.bankAccountId, true);
            if (this.depositDate != null) {
                xml.writeStartElement("depositdate");
                xml.writeDateSplitElements(this.depositDate);
                xml.writeEndElement(); // depositdate
            }
        }
        else {
            xml.writeElement("undepglaccountno", this.undepositedFundsGlAccountNo, true);
        }
        xml.writeElement("refid", this.transactionNo);
        xml.writeElement("description", this.description);
        xml.writeElement("supdocid", this.attachmentsId);
        xml.writeElement("currency", this.transactionCurrency);
        if (this.exchangeRateValue != null) {
            xml.writeElement("exchrate", this.exchangeRateValue);
        }
        else if (this.exchangeRateDate != null || this.exchangeRateType != null) {
            if (this.exchangeRateDate != null) {
                xml.writeStartElement("exchratedate");
                xml.writeDateSplitElements(this.exchangeRateDate);
                xml.writeEndElement(); // exchratedate
            }
            xml.writeElement("exchratetype", this.exchangeRateType, true);
        }
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeStartElement("receiptitems");
        if (this.lines != null && this.lines.length > 0) {
            for (const line of this.lines) {
                line.writeXml(xml);
            }
        }
        xml.writeEndElement(); // receiptitems
        xml.writeEndElement(); // record_otherreceipt
        xml.writeEndElement(); // function
    }
}
exports.default = OtherReceiptCreate;
//# sourceMappingURL=OtherReceiptCreate.js.map