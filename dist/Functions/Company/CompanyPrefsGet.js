"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../AbstractFunction");
class CompanyPrefsGet extends AbstractFunction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("get_companyprefs");
        xml.writeAttribute("application", this.application);
        xml.writeEndElement(); // get_companyprefs
        xml.writeEndElement(); // function
    }
}
exports.default = CompanyPrefsGet;
//# sourceMappingURL=CompanyPrefsGet.js.map