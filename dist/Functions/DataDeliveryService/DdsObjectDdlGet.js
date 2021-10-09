"use strict";
/**
 * @module Intacct/SDK/Functions/DataDeliveryService
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../AbstractFunction");
class DdsObjectDdlGet extends AbstractFunction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("getDdsDdl");
        xml.writeElement("object", this.objectName, true);
        xml.writeEndElement(); // getDdsDdl
        xml.writeEndElement(); // function
    }
}
exports.default = DdsObjectDdlGet;
//# sourceMappingURL=DdsObjectDdlGet.js.map