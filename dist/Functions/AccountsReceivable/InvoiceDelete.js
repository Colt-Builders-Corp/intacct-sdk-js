"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsReceivable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractInvoice_1 = require("./AbstractInvoice");
class InvoiceDelete extends AbstractInvoice_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_invoice");
        xml.writeAttribute("key", this.recordNo, true);
        xml.writeEndElement(); // delete_invoice
        xml.writeEndElement(); // function
    }
}
exports.default = InvoiceDelete;
//# sourceMappingURL=InvoiceDelete.js.map