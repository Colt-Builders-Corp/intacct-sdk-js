"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsReceivable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../AbstractFunction");
class AbstractCustomer extends AbstractFunction_1.default {
    constructor() {
        super(...arguments);
        this.customFields = [];
    }
    writeXmlMailAddress(xml) {
        if (this.addressLine1 != null
            || this.addressLine2 != null
            || this.city != null
            || this.stateProvince != null
            || this.zipPostalCode != null
            || this.country != null
            || this.isoCountryCode != null) {
            xml.writeStartElement("MAILADDRESS");
            xml.writeElement("ADDRESS1", this.addressLine1);
            xml.writeElement("ADDRESS2", this.addressLine2);
            xml.writeElement("CITY", this.city);
            xml.writeElement("STATE", this.stateProvince);
            xml.writeElement("ZIP", this.zipPostalCode);
            xml.writeElement("COUNTRY", this.country);
            xml.writeElement("COUNTRYCODE", this.isoCountryCode);
            xml.writeEndElement(); // MAILADDRESS
        }
    }
}
exports.default = AbstractCustomer;
//# sourceMappingURL=AbstractCustomer.js.map