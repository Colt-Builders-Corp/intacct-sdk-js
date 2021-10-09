"use strict";
/**
 * @module Intacct/SDK/Functions/GeneralLedger
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractAccount_1 = require("./AbstractAccount");
class AccountDelete extends AbstractAccount_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_glaccount");
        xml.writeAttribute("glaccountno", this.accountNo, true);
        xml.writeEndElement(); // delete_glaccount
        xml.writeEndElement(); // function
    }
}
exports.default = AccountDelete;
//# sourceMappingURL=AccountDelete.js.map