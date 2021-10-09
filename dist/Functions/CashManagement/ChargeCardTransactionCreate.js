"use strict";
/**
 * @module Intacct/SDK/Functions/CashManagement
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractChargeCardTransaction_1 = require("./AbstractChargeCardTransaction");
class ChargeCardTransactionCreate extends AbstractChargeCardTransaction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("record_cctransaction");
        xml.writeElement("chargecardid", this.chargeCardId, true);
        if (this.transactionDate != null) {
            xml.writeStartElement("paymentdate");
            xml.writeDateSplitElements(this.transactionDate);
            xml.writeEndElement(); // paymentdate
        }
        xml.writeElement("referenceno", this.referenceNumber);
        xml.writeElement("payee", this.payee);
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
                xml.writeEndElement();
            }
            xml.writeElement("exchratetype", this.exchangeRateType, true);
        }
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeStartElement("ccpayitems");
        if (this.lines != null && this.lines.length > 0) {
            for (const line of this.lines) {
                line.writeXml(xml);
            }
        }
        xml.writeEndElement(); // ccpayitems
        xml.writeEndElement(); // record_cctransaction
        xml.writeEndElement(); // function
    }
}
exports.default = ChargeCardTransactionCreate;
//# sourceMappingURL=ChargeCardTransactionCreate.js.map