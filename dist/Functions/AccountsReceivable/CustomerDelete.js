"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsReceivable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCustomer_1 = require("./AbstractCustomer");
class CustomerDelete extends AbstractCustomer_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_customer");
        xml.writeAttribute("customerid", this.customerId, true);
        xml.writeEndElement(); // delete_customer
        xml.writeEndElement(); // function
    }
}
exports.default = CustomerDelete;
//# sourceMappingURL=CustomerDelete.js.map