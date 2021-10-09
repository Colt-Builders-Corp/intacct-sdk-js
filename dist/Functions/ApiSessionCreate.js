"use strict";
/**
 * @module Intacct/SDK/Functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("./AbstractFunction");
class ApiSessionCreate extends AbstractFunction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("getAPISession");
        if (this.entityId != null) {
            xml.writeElement("locationid", this.entityId, true);
        }
        xml.writeEndElement(); // getAPISession
        xml.writeEndElement(); // function
    }
}
exports.default = ApiSessionCreate;
//# sourceMappingURL=ApiSessionCreate.js.map