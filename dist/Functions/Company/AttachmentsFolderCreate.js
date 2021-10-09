"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractAttachmentsFolder_1 = require("./AbstractAttachmentsFolder");
class AttachmentsFolderCreate extends AbstractAttachmentsFolder_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_supdocfolder");
        xml.writeElement("supdocfoldername", this.folderName, true);
        xml.writeElement("supdocfolderdescription", this.description);
        xml.writeElement("supdocparentfoldername", this.parentFolderName);
        xml.writeEndElement(); // create_supdocfolder
        xml.writeEndElement(); // function
    }
}
exports.default = AttachmentsFolderCreate;
//# sourceMappingURL=AttachmentsFolderCreate.js.map