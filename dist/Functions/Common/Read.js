"use strict";
/**
 * @module Intacct/SDK/Functions/Common
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../AbstractFunction");
class Read extends AbstractFunction_1.default {
    get keys() {
        return this._keys;
    }
    set keys(keys) {
        if (keys != null && keys.length > Read.MAX_KEY_COUNT) {
            throw new Error("Keys count cannot exceed " + Read.MAX_KEY_COUNT);
        }
        this._keys = keys;
    }
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("read");
        xml.writeElement("object", this.objectName, true);
        xml.writeElement("keys", this.keys !== undefined && this.keys.length > 0 ? this.keys.join(",") : "", true);
        xml.writeElement("fields", this.fields !== undefined && this.fields.length > 0 ? this.fields.join(",") : "*", true);
        xml.writeElement("returnFormat", "xml");
        xml.writeElement("docparid", this.docParId);
        xml.writeEndElement(); // read
        xml.writeEndElement(); // function
    }
}
exports.default = Read;
Read.MAX_KEY_COUNT = 100;
//# sourceMappingURL=Read.js.map