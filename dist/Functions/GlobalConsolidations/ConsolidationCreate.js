"use strict";
/**
 * @module Intacct/SDK/Functions/GlobalConsolidations
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractConsolidation_1 = require("./AbstractConsolidation");
class ConsolidationCreate extends AbstractConsolidation_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("consolidate");
        xml.writeElement("bookid", this.reportingBookId, true);
        xml.writeElement("reportingperiodname", this.reportingPeriodName, true);
        if (this.processOffline === true) {
            xml.writeElement("offline", "T");
        }
        else if (this.processOffline === false) {
            xml.writeElement("offline", "F");
        }
        xml.writeElement("updatesucceedingperiods", this.updateSucceedingPeriods);
        xml.writeElement("changesonly", this.changesOnly);
        xml.writeElement("email", this.notificationEmail);
        if (this.entities != null && this.entities.length > 0) {
            xml.writeStartElement("entities");
            for (const entity of this.entities) {
                entity.writeXml(xml);
            }
            xml.writeEndElement(); // entities
        }
        xml.writeEndElement(); // consolidate
        xml.writeEndElement(); // function
    }
}
exports.default = ConsolidationCreate;
//# sourceMappingURL=ConsolidationCreate.js.map