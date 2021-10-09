"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsReceivable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractInvoice_1 = require("./AbstractInvoice");
class InvoiceUpdate extends AbstractInvoice_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("update_invoice");
        if (this.externalId != null) {
            xml.writeAttribute("key", this.externalId);
            xml.writeAttribute("externalkey", "true");
        }
        else {
            xml.writeAttribute("key", this.recordNo);
        }
        xml.writeElement("customerid", this.customerId);
        if (this.transactionDate != null) {
            xml.writeStartElement("datecreated");
            xml.writeDateSplitElements(this.transactionDate);
            xml.writeEndElement(); // datecreated
        }
        if (this.glPostingDate) {
            xml.writeStartElement("dateposted");
            xml.writeDateSplitElements(this.glPostingDate);
            xml.writeEndElement(); // dateposted
        }
        if (this.dueDate) {
            xml.writeStartElement("datedue");
            xml.writeDateSplitElements(this.dueDate);
            xml.writeEndElement(); // datedue
            xml.writeElement("termname", this.paymentTerm);
        }
        else if (this.paymentTerm != null) {
            xml.writeElement("termname", this.paymentTerm);
        }
        xml.writeElement("action", this.action);
        xml.writeElement("invoiceno", this.invoiceNumber);
        xml.writeElement("ponumber", this.referenceNumber);
        xml.writeElement("description", this.description);
        if (this.billToContactName != null) {
            xml.writeStartElement("payto");
            xml.writeElement("contactname", this.billToContactName);
            xml.writeEndElement(); // payto
        }
        if (this.shipToContactName != null) {
            xml.writeStartElement("returnto");
            xml.writeElement("contactname", this.shipToContactName);
            xml.writeEndElement(); // returnto
        }
        this.writeXmlMultiCurrencySection(xml);
        xml.writeElement("supdocid", this.attachmentsId);
        xml.writeCustomFieldsExplicit(this.customFields);
        if (this.lines != null && this.lines.length > 0) {
            xml.writeStartElement("updateinvoiceitems");
            for (const line of this.lines) {
                line.writeXml(xml);
            }
            xml.writeEndElement(); // updateinvoiceitems
        }
        xml.writeEndElement(); // update_invoice
        xml.writeEndElement(); // function
    }
    writeXmlMultiCurrencySection(xml) {
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
        else if ((this.baseCurrency != null) || (this.transactionCurrency != null)) {
            xml.writeElement("exchratetype", this.exchangeRateType);
        }
    }
}
exports.default = InvoiceUpdate;
//# sourceMappingURL=InvoiceUpdate.js.map