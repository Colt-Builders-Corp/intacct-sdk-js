"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractAttachments_1 = require("./AbstractAttachments");
class AttachmentsUpdate extends AbstractAttachments_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("update_supdoc");
        xml.writeElement("supdocid", this.attachmentsId, true);
        xml.writeElement("supdocname", this.attachmentsName);
        xml.writeElement("supdocfoldername", this.attachmentFolderName);
        xml.writeElement("supdocdescription", this.description);
        if (this.files != null && this.files.length > 0) {
            xml.writeStartElement("attachments");
            for (const file of this.files) {
                file.writeXml(xml);
            }
            xml.writeEndElement(); // attachments
        }
        xml.writeEndElement(); // update_supdoc
        xml.writeEndElement(); // function
    }
}
exports.default = AttachmentsUpdate;
//# sourceMappingURL=AttachmentsUpdate.js.map