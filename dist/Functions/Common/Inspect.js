"use strict";
/**
 * @module Intacct/SDK/Functions/PlatformServices
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../AbstractFunction");
class Inspect extends AbstractFunction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("inspect");
        xml.writeElement("object", this.objectName || "*", true);
        xml.writeEndElement(); // inspect
        xml.writeEndElement(); // function
    }
}
exports.default = Inspect;
//# sourceMappingURL=Inspect.js.map