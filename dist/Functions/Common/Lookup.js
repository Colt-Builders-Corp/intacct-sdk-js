"use strict";
/**
 * @module Intacct/SDK/Functions/PlatformServices
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../AbstractFunction");
class Lookup extends AbstractFunction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("lookup");
        xml.writeElement("object", this.objectName, true);
        xml.writeEndElement(); // lookup
        xml.writeEndElement(); // function
    }
}
exports.default = Lookup;
//# sourceMappingURL=Lookup.js.map