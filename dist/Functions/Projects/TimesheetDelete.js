"use strict";
/**
 * @module Intacct/SDK/Functions/Projects
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractTimesheet_1 = require("./AbstractTimesheet");
class TimesheetDelete extends AbstractTimesheet_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete");
        xml.writeElement("object", "TIMESHEET");
        xml.writeElement("keys", this.recordNo);
        xml.writeEndElement(); // delete
        xml.writeEndElement(); // function
    }
}
exports.default = TimesheetDelete;
//# sourceMappingURL=TimesheetDelete.js.map