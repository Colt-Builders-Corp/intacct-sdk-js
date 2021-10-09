"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractApAdjustment_1 = require("./AbstractApAdjustment");
class ApAdjustmentCreate extends AbstractApAdjustment_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_apadjustment");
        xml.writeElement("vendorid", this.vendorId, true);
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
        xml.writeElement("billno", this.billNumber);
        xml.writeElement("description", this.description);
        xml.writeElement("externalid", this.externalId);
        this.writeXmlMultiCurrencySection(xml);
        xml.writeElement("nogl", this.doNotPostToGl);
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeStartElement("apadjustmentitems");
        if (this.lines != null && this.lines.length > 0) {
            for (const line of this.lines) {
                line.writeXml(xml);
            }
        }
        xml.writeEndElement(); // apadjustmentitems
        xml.writeEndElement(); // create_apadjustment
        xml.writeEndElement(); // function
    }
}
exports.default = ApAdjustmentCreate;
//# sourceMappingURL=ApAdjustmentCreate.js.map