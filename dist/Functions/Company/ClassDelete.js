"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractClass_1 = require("./AbstractClass");
class ClassDelete extends AbstractClass_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_class");
        xml.writeAttribute("key", this.classId, true);
        xml.writeEndElement(); // delete_class
        xml.writeEndElement(); // function
    }
}
exports.default = ClassDelete;
//# sourceMappingURL=ClassDelete.js.map