"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractClass_1 = require("./AbstractClass");
class ClassCreate extends AbstractClass_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create");
        xml.writeStartElement("CLASS");
        xml.writeElement("CLASSID", this.classId, true);
        xml.writeElement("NAME", this.className, true);
        xml.writeElement("DESCRIPTION", this.description);
        xml.writeElement("PARENTID", this.parentClassId);
        if (this.active === true) {
            xml.writeElement("STATUS", "active");
        }
        else if (this.active === false) {
            xml.writeElement("STATUS", "inactive");
        }
        xml.writeCustomFieldsImplicit(this.customFields);
        xml.writeEndElement(); // CLASS
        xml.writeEndElement(); // create
        xml.writeEndElement(); // function
    }
}
exports.default = ClassCreate;
//# sourceMappingURL=ClassCreate.js.map