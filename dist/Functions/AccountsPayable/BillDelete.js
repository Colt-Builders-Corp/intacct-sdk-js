"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractBill_1 = require("./AbstractBill");
class BillDelete extends AbstractBill_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_bill");
        xml.writeAttribute("key", this.recordNo, true);
        xml.writeEndElement(); // delete_bill
        xml.writeEndElement(); // function
    }
}
exports.default = BillDelete;
//# sourceMappingURL=BillDelete.js.map