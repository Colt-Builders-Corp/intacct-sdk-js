"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractApAdjustmentSummary_1 = require("./AbstractApAdjustmentSummary");
class ApAdjustmentSummaryCreate extends AbstractApAdjustmentSummary_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_apadjustmentbatch");
        xml.writeElement("batchtitle", this.title, true);
        xml.writeStartElement("datecreated");
        xml.writeDateSplitElements(this.glPostingDate);
        xml.writeEndElement(); // datecreated
        xml.writeEndElement(); // create_apadjustmentbatch
        xml.writeEndElement(); // function
    }
}
exports.default = ApAdjustmentSummaryCreate;
//# sourceMappingURL=ApAdjustmentSummaryCreate.js.map