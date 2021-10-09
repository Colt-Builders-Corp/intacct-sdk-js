"use strict";
/**
 * @module Intacct/SDK/Functions/Purchasing
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractPurchasingTransaction_1 = require("./AbstractPurchasingTransaction");
class PurchasingTransactionUpdate extends AbstractPurchasingTransaction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("update_potransaction");
        if (this.externalId != null) {
            xml.writeAttribute("key", this.externalId);
            xml.writeAttribute("externalkey", "true");
        }
        else {
            xml.writeAttribute("key", this.documentNumber);
        }
        if (this.transactionDate != null) {
            xml.writeStartElement("datecreated");
            xml.writeDateSplitElements(this.transactionDate);
            xml.writeEndElement(); // datecreated
        }
        if (this.glPostingDate != null) {
            xml.writeStartElement("dateposted");
            xml.writeDateSplitElements(this.glPostingDate);
            xml.writeEndElement(); // dateposted
        }
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
        if (this.returnToContactName != null) {
            xml.writeStartElement("returnto");
            xml.writeElement("contactname", this.returnToContactName, true);
            xml.writeEndElement(); // returnto
        }
        if (this.payToContactName != null) {
            xml.writeStartElement("payto");
            xml.writeElement("contactname", this.payToContactName, true);
            xml.writeEndElement(); // payto
        }
        xml.writeElement("supdocid", this.attachmentsId);
        xml.writeElement("externalid", this.externalId);
        this.writeXmlMultiCurrencySection(xml);
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeElement("state", this.state);
        if (this.lines != null && this.lines.length > 0) {
            xml.writeStartElement("updatepotransitems");
            for (const line of this.lines) {
                line.writeXml(xml);
            }
            xml.writeEndElement(); // updatepotransitems
        }
        if (this.subtotals != null && this.subtotals.length > 0) {
            xml.writeStartElement("updatesubtotals");
            for (const subtotal of this.subtotals) {
                subtotal.writeXml(xml);
            }
            xml.writeEndElement(); // updatesubtotals
        }
        xml.writeEndElement(); // update_potransaction
        xml.writeEndElement(); // function
    }
}
exports.default = PurchasingTransactionUpdate;
//# sourceMappingURL=PurchasingTransactionUpdate.js.map