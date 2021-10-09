"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractAttachments_1 = require("./AbstractAttachments");
class AttachmentsDelete extends AbstractAttachments_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_supdoc");
        xml.writeAttribute("key", this.attachmentsId, true);
        xml.writeEndElement(); // delete_supdoc
        xml.writeEndElement(); // function
    }
}
exports.default = AttachmentsDelete;
//# sourceMappingURL=AttachmentsDelete.js.map