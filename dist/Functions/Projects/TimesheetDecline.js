"use strict";
/**
 * @module Intacct/SDK/Functions/Projects
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../AbstractFunction");
class DeclineTimesheet extends AbstractFunction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("decline");
        xml.writeStartElement("TIMESHEET");
        xml.writeElement("RECORDNO", this.recordNo, true);
        xml.writeElement("ENTRYKEYS", (this.lineRecordNo || []).join(","), true);
        xml.writeElement("DECLINEDBY", this.declinedBy, true);
        xml.writeElement("COMMENT", this.comment, true);
        xml.writeEndElement(); // TIMESHEET
        xml.writeEndElement(); // decline
        xml.writeEndElement(); // function
    }
}
exports.default = DeclineTimesheet;
//# sourceMappingURL=TimesheetDecline.js.map