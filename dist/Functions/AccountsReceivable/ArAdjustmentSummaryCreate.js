"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsReceivable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractArAdjustmentSummary_1 = require("./AbstractArAdjustmentSummary");
class ArAdjustmentSummaryCreate extends AbstractArAdjustmentSummary_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_aradjustmentbatch");
        xml.writeElement("batchtitle", this.title, true);
        xml.writeStartElement("datecreated");
        xml.writeDateSplitElements(this.glPostingDate);
        xml.writeEndElement(); // datecreated
        xml.writeEndElement(); // create_aradjustmentbatch
        xml.writeEndElement(); // function
    }
}
exports.default = ArAdjustmentSummaryCreate;
//# sourceMappingURL=ArAdjustmentSummaryCreate.js.map