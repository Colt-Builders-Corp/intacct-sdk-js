"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Sage Intacct, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "LICENSE" file accompanying this file. This file is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
const IaXmlWriter_1 = require("../../Xml/IaXmlWriter");
const AbstractLocation_1 = require("./AbstractLocation");
class LocationUpdate extends AbstractLocation_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("update");
        xml.writeStartElement("LOCATION");
        xml.writeElement("LOCATIONID", this.locationId, true);
        xml.writeElement("NAME", this.locationName);
        xml.writeElement("PARENTID", this.parentLocationId);
        xml.writeElement("SUPERVISORID", this.managerEmployeeId);
        if (this.locationContactName != null) {
            xml.writeStartElement("CONTACTINFO");
            xml.writeElement("CONTACTNAME", this.locationContactName);
            xml.writeEndElement(); // CONTACTINFO
        }
        if (this.shipToContactName != null) {
            xml.writeStartElement("SHIPTO");
            xml.writeElement("CONTACTNAME", this.shipToContactName);
            xml.writeEndElement(); // SHIPTO
        }
        xml.writeElementDate("STARTDATE", this.startDate, IaXmlWriter_1.default.intacctDateFormat);
        xml.writeElementDate("ENDDATE", this.endDate, IaXmlWriter_1.default.intacctDateFormat);
        xml.writeElement("CUSTTITLE", this.locationTitle);
        if (this.active === true) {
            xml.writeElement("STATUS", "active");
        }
        else if (this.active === false) {
            xml.writeElement("STATUS", "inactive");
        }
        xml.writeCustomFieldsImplicit(this.customFields);
        xml.writeEndElement(); // LOCATION
        xml.writeEndElement(); // update
        xml.writeEndElement(); // function
    }
}
exports.default = LocationUpdate;
//# sourceMappingURL=LocationUpdate.js.map