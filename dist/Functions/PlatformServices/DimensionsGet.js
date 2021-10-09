"use strict";
/**
 * @module Intacct/SDK/Functions/PlatformServices
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../AbstractFunction");
class DimensionsGet extends AbstractFunction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("getDimensions");
        xml.writeEndElement(); // getDimensions
        xml.writeEndElement(); // function
    }
}
exports.default = DimensionsGet;
//# sourceMappingURL=DimensionsGet.js.map