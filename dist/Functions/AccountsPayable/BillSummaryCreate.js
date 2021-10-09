"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractBillSummary_1 = require("./AbstractBillSummary");
class BillSummaryCreate extends AbstractBillSummary_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_billbatch");
        xml.writeElement("batchtitle", this.title, true);
        xml.writeStartElement("datecreated");
        xml.writeDateSplitElements(this.glPostingDate);
        xml.writeEndElement(); // datecreated
        xml.writeEndElement(); // create_billbatch
        xml.writeEndElement(); // function
    }
}
exports.default = BillSummaryCreate;
//# sourceMappingURL=BillSummaryCreate.js.map