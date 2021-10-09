"use strict";
/**
 * @module Intacct/SDK/Functions/GlobalConsolidations
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ConsolidationEntity {
    writeXml(xml) {
        xml.writeStartElement("csnentity");
        xml.writeElement("entityid", this.entityId, true);
        // Rates support up to 10 decimal places
        xml.writeElement("bsrate", this.endingSpotRate);
        xml.writeElement("warate", this.weightedAverageRate);
        xml.writeEndElement(); // csnentity
    }
}
exports.default = ConsolidationEntity;
//# sourceMappingURL=ConsolidationEntity.js.map