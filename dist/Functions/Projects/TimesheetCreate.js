"use strict";
/**
 * @module Intacct/SDK/Functions/Projects
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
const AbstractTimesheet_1 = require("./AbstractTimesheet");
class TimesheetCreate extends AbstractTimesheet_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create");
        xml.writeStartElement("TIMESHEET");
        xml.writeElement("EMPLOYEEID", this.employeeId, true);
        xml.writeElementDate("BEGINDATE", this.beginDate, IaXmlWriter_1.default.intacctDateFormat);
        xml.writeElement("DESCRIPTION", this.description);
        xml.writeElement("SUPDOCID", this.attachmentsId);
        xml.writeElement("STATE", this.action);
        xml.writeStartElement("TIMESHEETENTRIES");
        if (this.entries != null && this.entries.length > 0) {
            for (const entry of this.entries) {
                entry.writeXml(xml);
            }
        }
        xml.writeEndElement(); // TIMESHEETENTRIES
        xml.writeCustomFieldsImplicit(this.customFields);
        xml.writeEndElement(); // TIMESHEET
        xml.writeEndElement(); // create
        xml.writeEndElement(); // function
    }
}
exports.default = TimesheetCreate;
//# sourceMappingURL=TimesheetCreate.js.map