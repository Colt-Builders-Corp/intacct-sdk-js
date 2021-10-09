"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsReceivable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractInvoice_1 = require("./AbstractInvoice");
class InvoiceCreate extends AbstractInvoice_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_invoice");
        xml.writeElement("customerid", this.customerId, true);
        xml.writeStartElement("datecreated");
        xml.writeDateSplitElements(this.transactionDate);
        xml.writeEndElement(); // datecreated
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
        else {
            xml.writeElement("termname", this.paymentTerm, true);
        }
        xml.writeElement("action", this.action);
        xml.writeElement("batchkey", this.summaryRecordNo);
        xml.writeElement("invoiceno", this.invoiceNumber);
        xml.writeElement("ponumber", this.referenceNumber);
        xml.writeElement("onhold", this.onHold);
        xml.writeElement("description", this.description);
        xml.writeElement("externalid", this.externalId);
        if (this.billToContactName != null) {
            xml.writeStartElement("billto");
            xml.writeElement("contactname", this.billToContactName);
            xml.writeEndElement(); // billto
        }
        if (this.shipToContactName != null) {
            xml.writeStartElement("shipto");
            xml.writeElement("contactname", this.shipToContactName);
            xml.writeEndElement(); // shipto
        }
        this.writeXmlMultiCurrencySection(xml);
        xml.writeElement("nogl", this.doNotPostToGl);
        xml.writeElement("supdocid", this.attachmentsId);
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeStartElement("invoiceitems");
        if (this.lines != null && this.lines.length > 0) {
            for (const line of this.lines) {
                line.writeXml(xml);
            }
        }
        xml.writeEndElement(); // invoiceitems
        xml.writeEndElement(); // create_invoice
        xml.writeEndElement(); // function
    }
}
exports.default = InvoiceCreate;
//# sourceMappingURL=InvoiceCreate.js.map