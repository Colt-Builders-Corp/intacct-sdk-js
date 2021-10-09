"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractLocation_1 = require("./AbstractLocation");
class LocationDelete extends AbstractLocation_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_location");
        xml.writeAttribute("locationid", this.locationId, true);
        xml.writeEndElement(); // delete_location
        xml.writeEndElement(); // function
    }
}
exports.default = LocationDelete;
//# sourceMappingURL=LocationDelete.js.map