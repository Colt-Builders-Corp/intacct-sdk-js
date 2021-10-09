"use strict";
/**
 * @module Intacct/SDK/Functions/ContractsRevMgmt
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractContractLine_1 = require("./AbstractContractLine");
class ContractLineDelete extends AbstractContractLine_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete");
        xml.writeElement("object", "CONTRACTDETAIL");
        xml.writeElement("keys", this.recordNo, true);
        xml.writeEndElement(); // delete
        xml.writeEndElement(); // function
    }
}
exports.default = ContractLineDelete;
//# sourceMappingURL=ContractLineDelete.js.map