"use strict";
/**
 * @module Intacct/SDK/Functions/Common/GetList
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../../AbstractFunction");
class GetList extends AbstractFunction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("get_list");
        xml.writeAttribute("object", this.object);
        xml.writeEndElement(); // get_list
        xml.writeEndElement(); // function
    }
}
exports.default = GetList;
//# sourceMappingURL=GetList.js.map