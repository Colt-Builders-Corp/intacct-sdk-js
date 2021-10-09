"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractVendor_1 = require("./AbstractVendor");
class VendorDelete extends AbstractVendor_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_vendor");
        xml.writeAttribute("vendorid", this.vendorId, true);
        xml.writeEndElement(); // delete_vendor
        xml.writeEndElement(); // function
    }
}
exports.default = VendorDelete;
//# sourceMappingURL=VendorDelete.js.map