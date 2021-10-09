"use strict";
/**
 * @module Intacct/SDK/Functions/Projects
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractTask_1 = require("./AbstractTask");
class TaskDelete extends AbstractTask_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_task");
        xml.writeAttribute("key", this.recordNo, true);
        xml.writeEndElement(); // delete_task
        xml.writeEndElement(); // function
    }
}
exports.default = TaskDelete;
//# sourceMappingURL=TaskDelete.js.map