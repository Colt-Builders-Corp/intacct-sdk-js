"use strict";
/**
 * @module Intacct/SDK/Functions/Projects
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractProject_1 = require("./AbstractProject");
class ProjectDelete extends AbstractProject_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_project");
        xml.writeAttribute("key", this.projectId, true);
        xml.writeEndElement(); // delete_project
        xml.writeEndElement(); // function
    }
}
exports.default = ProjectDelete;
//# sourceMappingURL=ProjectDelete.js.map