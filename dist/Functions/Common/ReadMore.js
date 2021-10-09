"use strict";
/**
 * @module Intacct/SDK/Functions/Common
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../AbstractFunction");
class ReadMore extends AbstractFunction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("readMore");
        if (this.resultId == null) {
            throw new Error("Result ID is required for read more");
        }
        xml.writeElement("resultId", this.resultId, true);
        xml.writeEndElement(); // readMore
        xml.writeEndElement(); // function
    }
}
exports.default = ReadMore;
//# sourceMappingURL=ReadMore.js.map