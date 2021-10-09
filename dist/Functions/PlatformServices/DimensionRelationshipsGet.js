"use strict";
/**
 * @module Intacct/SDK/Functions/PlatformServices
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../AbstractFunction");
class DimensionRelationshipsGet extends AbstractFunction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("getDimensionRelationships");
        xml.writeEndElement(); // getDimensionRelationships
        xml.writeEndElement(); // function
    }
}
exports.default = DimensionRelationshipsGet;
//# sourceMappingURL=DimensionRelationshipsGet.js.map