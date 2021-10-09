"use strict";
/**
 * @module Intacct/SDK/Functions/ContractsRevMgmt
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractContract_1 = require("./AbstractContract");
class ContractDelete extends AbstractContract_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete");
        xml.writeElement("object", "CONTRACT");
        xml.writeElement("keys", this.recordNo, true);
        xml.writeEndElement(); // delete
        xml.writeEndElement(); // function
    }
}
exports.default = ContractDelete;
//# sourceMappingURL=ContractDelete.js.map