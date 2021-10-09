"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsReceivable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractArAdjustment_1 = require("./AbstractArAdjustment");
class ArAdjustmentCreate extends AbstractArAdjustment_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_aradjustment");
        xml.writeElement("customerid", this.customerId, true);
        xml.writeStartElement("datecreated");
        xml.writeDateSplitElements(this.transactionDate);
        xml.writeEndElement(); // datecreated
        if (this.glPostingDate != null) {
            xml.writeStartElement("dateposted");
            xml.writeDateSplitElements(this.glPostingDate);
            xml.writeEndElement(); // dateposted
        }
        xml.writeElement("batchkey", this.summaryRecordNo);
        xml.writeElement("adjustmentno", this.adjustmentNumber);
        xml.writeElement("action", this.action);
        xml.writeElement("invoiceno", this.invoiceNumber);
        xml.writeElement("description", this.description);
        xml.writeElement("externalid", this.externalId);
        this.writeXmlMultiCurrencySection(xml);
        xml.writeElement("nogl", this.doNotPostToGl);
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeStartElement("aradjustmentitems");
        if (this.lines != null && this.lines.length > 0) {
            for (const line of this.lines) {
                line.writeXml(xml);
            }
        }
        xml.writeEndElement(); // aradjustmentitems
        xml.writeEndElement(); // create_aradjustment
        xml.writeEndElement(); // function
    }
}
exports.default = ArAdjustmentCreate;
//# sourceMappingURL=ArAdjustmentCreate.js.map