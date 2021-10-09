"use strict";
/**
 * @module Intacct/SDK/Functions/DataDeliveryService
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../AbstractFunction");
class DdsObjectList extends AbstractFunction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("getDdsObjects");
        xml.writeEndElement(); // getDdsObjects
        xml.writeEndElement(); // function
    }
}
exports.default = DdsObjectList;
//# sourceMappingURL=DdsObjectList.js.map