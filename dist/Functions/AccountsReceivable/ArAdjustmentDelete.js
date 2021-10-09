"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsReceivable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractArAdjustment_1 = require("./AbstractArAdjustment");
class ArAdjustmentDelete extends AbstractArAdjustment_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_aradjustment");
        xml.writeAttribute("key", this.recordNo);
        xml.writeEndElement(); // delete_aradjustment
        xml.writeEndElement(); // function
    }
}
exports.default = ArAdjustmentDelete;
//# sourceMappingURL=ArAdjustmentDelete.js.map