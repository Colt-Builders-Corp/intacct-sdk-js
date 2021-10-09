"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractBill_1 = require("./AbstractBill");
class BillUpdate extends AbstractBill_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("update_bill");
        if (this.externalId != null) {
            xml.writeAttribute("key", this.externalId);
            xml.writeAttribute("externalkey", "true");
        }
        else {
            xml.writeAttribute("key", this.recordNo);
        }
        xml.writeElement("vendorid", this.vendorId);
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
        if (this.dueDate != null) {
            xml.writeStartElement("datedue");
            xml.writeDateSplitElements(this.dueDate);
            xml.writeEndElement(); // datedue
            xml.writeElement("termname", this.paymentTerm);
        }
        else if (this.paymentTerm != null) {
            xml.writeElement("termname", this.paymentTerm, true);
        }
        xml.writeElement("action", this.action);
        xml.writeElement("billno", this.billNumber);
        xml.writeElement("ponumber", this.referenceNumber);
        xml.writeElement("onhold", this.onHold);
        xml.writeElement("description", this.description);
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
        xml.writeElement("supdocid", this.attachmentsId);
        xml.writeCustomFieldsExplicit(this.customFields);
        if (this.lines != null && this.lines.length > 0) {
            xml.writeStartElement("updatebillitems");
            for (const line of this.lines) {
                line.writeXml(xml);
            }
            xml.writeEndElement(); // updatebillitems
        }
        xml.writeEndElement(); // update_bill
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
exports.default = BillUpdate;
//# sourceMappingURL=BillUpdate.js.map