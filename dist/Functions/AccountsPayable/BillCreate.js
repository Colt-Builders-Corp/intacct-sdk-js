"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractBill_1 = require("./AbstractBill");
class BillCreate extends AbstractBill_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_bill");
        xml.writeElement("vendorid", this.vendorId, true);
        xml.writeStartElement("datecreated");
        xml.writeDateSplitElements(this.transactionDate);
        xml.writeEndElement(); // datecreated
        if (this.glPostingDate != null) {
            xml.writeStartElement("dateposted");
            xml.writeDateSplitElements(this.glPostingDate);
            xml.writeEndElement(); // dateposted
        }
        if (this.dueDate != null) {
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
        xml.writeElement("billno", this.billNumber);
        xml.writeElement("ponumber", this.referenceNumber);
        xml.writeElement("onhold", this.onHold);
        xml.writeElement("description", this.description);
        xml.writeElement("externalid", this.externalId);
        if (this.payToContactName != null) {
            xml.writeStartElement("payto");
            xml.writeElement("contactname", this.payToContactName);
            xml.writeEndElement(); // payto
        }
        if (this.returnToContactName != null) {
            xml.writeStartElement("returnto");
            xml.writeElement("contactname", this.returnToContactName);
            xml.writeEndElement(); // returnto
        }
        this.writeXmlMultiCurrencySection(xml);
        xml.writeElement("nogl", this.doNotPostToGl);
        xml.writeElement("supdocid", this.attachmentsId);
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeStartElement("billitems");
        if (this.lines != null && this.lines.length > 0) {
            for (const line of this.lines) {
                line.writeXml(xml);
            }
        }
        xml.writeEndElement(); // billitems
        xml.writeEndElement(); // create_bill
        xml.writeEndElement(); // function
    }
}
exports.default = BillCreate;
//# sourceMappingURL=BillCreate.js.map