"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsReceivable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractInvoiceSummary_1 = require("./AbstractInvoiceSummary");
class InvoiceSummaryCreate extends AbstractInvoiceSummary_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_invoicebatch");
        xml.writeElement("batchtitle", this.title, true);
        xml.writeStartElement("datecreated");
        xml.writeDateSplitElements(this.glPostingDate);
        xml.writeEndElement(); // datecreated
        xml.writeEndElement(); // create_invoicebatch
        xml.writeEndElement(); // function
    }
}
exports.default = InvoiceSummaryCreate;
//# sourceMappingURL=InvoiceSummaryCreate.js.map