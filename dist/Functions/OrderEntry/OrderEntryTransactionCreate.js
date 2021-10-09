"use strict";
/**
 * @module Intacct/SDK/Functions/OrderEntry
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractOrderEntryTransaction_1 = require("./AbstractOrderEntryTransaction");
class OrderEntryTransactionCreate extends AbstractOrderEntryTransaction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_sotransaction");
        xml.writeElement("transactiontype", this.transactionDefinition, true);
        xml.writeStartElement("datecreated");
        xml.writeDateSplitElements(this.transactionDate, true);
        xml.writeEndElement(); // datecreated
        if (this.glPostingDate != null) {
            xml.writeStartElement("dateposted");
            xml.writeDateSplitElements(this.glPostingDate);
            xml.writeEndElement(); // dateposted
        }
        xml.writeElement("createdfrom", this.createdFrom);
        xml.writeElement("customerid", this.customerId, true);
        xml.writeElement("documentno", this.documentNumber);
        if (this.originalDocumentDate != null) {
            xml.writeStartElement("origdocdate");
            xml.writeDateSplitElements(this.originalDocumentDate);
            xml.writeEndElement(); // origdocdate
        }
        xml.writeElement("referenceno", this.referenceNumber);
        xml.writeElement("termname", this.paymentTerm);
        if (this.dueDate != null) {
            xml.writeStartElement("datedue");
            xml.writeDateSplitElements(this.dueDate, true);
            xml.writeEndElement(); // datedue
        }
        xml.writeElement("message", this.message);
        xml.writeElement("shippingmethod", this.shippingMethod);
        if (this.shipToContactName != null) {
            xml.writeStartElement("shipto");
            xml.writeElement("contactname", this.shipToContactName, true);
            xml.writeEndElement(); // shipto
        }
        if (this.billToContactName != null) {
            xml.writeStartElement("billto");
            xml.writeElement("contactname", this.billToContactName, true);
            xml.writeEndElement(); // billto
        }
        xml.writeElement("supdocid", this.attachmentsId);
        xml.writeElement("externalid", this.externalId);
        this.writeXmlMultiCurrencySection(xml);
        xml.writeElement("vsoepricelist", this.vsoePriceList);
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeElement("state", this.state);
        xml.writeElement("projectid", this.projectId);
        xml.writeStartElement("sotransitems");
        if (this.lines != null && this.lines.length > 0) {
            for (const line of this.lines) {
                line.writeXml(xml);
            }
        }
        xml.writeEndElement(); // sotransitems
        if (this.subtotals != null && this.subtotals.length > 0) {
            xml.writeStartElement("subtotals");
            for (const subtotal of this.subtotals) {
                subtotal.writeXml(xml);
            }
            xml.writeEndElement(); // subtotals
        }
        xml.writeEndElement(); // create_sotransaction
        xml.writeEndElement(); // function
    }
}
exports.default = OrderEntryTransactionCreate;
//# sourceMappingURL=OrderEntryTransactionCreate.js.map