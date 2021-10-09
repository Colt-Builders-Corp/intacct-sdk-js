"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractApAdjustment_1 = require("./AbstractApAdjustment");
class ApAdjustmentDelete extends AbstractApAdjustment_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_apadjustment");
        xml.writeAttribute("key", this.recordNo);
        xml.writeEndElement(); // delete_apadjustment
        xml.writeEndElement(); // function
    }
}
exports.default = ApAdjustmentDelete;
//# sourceMappingURL=ApAdjustmentDelete.js.map