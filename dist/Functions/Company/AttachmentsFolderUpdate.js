"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractAttachmentsFolder_1 = require("./AbstractAttachmentsFolder");
class AttachmentsFolderUpdate extends AbstractAttachmentsFolder_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("update_supdocfolder");
        xml.writeElement("supdocfoldername", this.folderName, true);
        xml.writeElement("supdocfolderdescription", this.description);
        xml.writeElement("supdocparentfoldername", this.parentFolderName);
        xml.writeEndElement(); // update_supdocfolder
        xml.writeEndElement(); // function
    }
}
exports.default = AttachmentsFolderUpdate;
//# sourceMappingURL=AttachmentsFolderUpdate.js.map