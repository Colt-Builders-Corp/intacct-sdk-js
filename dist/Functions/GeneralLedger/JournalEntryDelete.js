"use strict";
/**
 * @module Intacct/SDK/Functions/GeneralLedger
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractJournalEntry_1 = require("./AbstractJournalEntry");
class JournalEntryDelete extends AbstractJournalEntry_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete");
        xml.writeElement("object", "GLBATCH");
        xml.writeElement("keys", this.recordNo, true);
        xml.writeEndElement(); // delete
        xml.writeEndElement(); // function
    }
}
exports.default = JournalEntryDelete;
//# sourceMappingURL=JournalEntryDelete.js.map