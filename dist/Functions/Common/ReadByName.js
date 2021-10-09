"use strict";
/**
 * @module Intacct/SDK/Functions/Common
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../AbstractFunction");
class ReadByName extends AbstractFunction_1.default {
    get names() {
        return this._names;
    }
    set names(names) {
        if (names != null && names.length > ReadByName.MAX_KEY_COUNT) {
            throw new Error("Names count cannot exceed " + ReadByName.MAX_KEY_COUNT);
        }
        this._names = names;
    }
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("readByName");
        xml.writeElement("object", this.objectName, true);
        xml.writeElement("keys", this.names !== undefined && this.names.length > 0 ? this.names.join(",") : "", true);
        xml.writeElement("fields", this.fields !== undefined && this.fields.length > 0 ? this.fields.join(",") : "*", true);
        xml.writeElement("returnFormat", "xml");
        xml.writeElement("docparid", this.docParId);
        xml.writeEndElement(); // readByName
        xml.writeEndElement(); // function
    }
}
exports.default = ReadByName;
ReadByName.MAX_KEY_COUNT = 100;
//# sourceMappingURL=ReadByName.js.map