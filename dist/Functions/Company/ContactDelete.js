"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractContact_1 = require("./AbstractContact");
class ContactDelete extends AbstractContact_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_contact");
        xml.writeAttribute("contactname", this.contactName, true);
        xml.writeEndElement(); // delete_contact
        xml.writeEndElement(); // function
    }
}
exports.default = ContactDelete;
//# sourceMappingURL=ContactDelete.js.map