"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractAttachmentsFolder_1 = require("./AbstractAttachmentsFolder");
class AttachmentsFolderDelete extends AbstractAttachmentsFolder_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_supdocfolder");
        xml.writeAttribute("key", this.folderName);
        xml.writeEndElement(); // delete_supdocfolder
        xml.writeEndElement(); // function
    }
}
exports.default = AttachmentsFolderDelete;
//# sourceMappingURL=AttachmentsFolderDelete.js.map