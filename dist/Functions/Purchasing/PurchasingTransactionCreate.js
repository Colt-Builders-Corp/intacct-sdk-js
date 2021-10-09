"use strict";
/**
 * @module Intacct/SDK/Functions/Purchasing
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractPurchasingTransaction_1 = require("./AbstractPurchasingTransaction");
class PurchasingTransactionCreate extends AbstractPurchasingTransaction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_potransaction");
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
        xml.writeElement("vendorid", this.vendorId, true);
        xml.writeElement("documentno", this.documentNumber);
        xml.writeElement("referenceno", this.referenceNumber);
        xml.writeElement("vendordocno", this.vendorDocNumber);
        xml.writeElement("termname", this.paymentTerm);
        if (this.dueDate != null) {
            xml.writeStartElement("datedue");
            xml.writeDateSplitElements(this.dueDate, true);
            xml.writeEndElement(); // datedue
        }
        xml.writeElement("message", this.message);
        xml.writeElement("shippingmethod", this.shippingMethod);
        xml.writeStartElement("returnto");
        xml.writeElement("contactname", this.returnToContactName, true);
        xml.writeEndElement(); // returnto
        xml.writeStartElement("payto");
        xml.writeElement("contactname", this.payToContactName, true);
        xml.writeEndElement(); // payto
        xml.writeElement("supdocid", this.attachmentsId);
        xml.writeElement("externalid", this.externalId);
        this.writeXmlMultiCurrencySection(xml);
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeElement("state", this.state);
        xml.writeStartElement("potransitems");
        if (this.lines != null && this.lines.length > 0) {
            for (const line of this.lines) {
                line.writeXml(xml);
            }
        }
        xml.writeEndElement(); // potransitems
        if (this.subtotals != null && this.subtotals.length > 0) {
            xml.writeStartElement("subtotals");
            for (const subtotal of this.subtotals) {
                subtotal.writeXml(xml);
            }
            xml.writeEndElement(); // subtotals
        }
        xml.writeEndElement(); // create_potransaction
        xml.writeEndElement(); // function
    }
}
exports.default = PurchasingTransactionCreate;
//# sourceMappingURL=PurchasingTransactionCreate.js.map