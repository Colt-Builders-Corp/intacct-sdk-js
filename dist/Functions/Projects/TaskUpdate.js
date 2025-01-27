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
const AbstractTask_1 = require("./AbstractTask");
class TaskUpdate extends AbstractTask_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("update");
        xml.writeStartElement("TASK");
        xml.writeElement("RECORDNO", this.recordNo, true);
        xml.writeElement("NAME", this.taskName);
        xml.writeElement("PROJECTID", this.projectId);
        xml.writeElementDate("PBEGINDATE", this.plannedBeginDate, IaXmlWriter_1.default.intacctDateFormat);
        xml.writeElementDate("PENDDATE", this.plannedEndDate, IaXmlWriter_1.default.intacctDateFormat);
        xml.writeElement("CLASSID", this.classId);
        xml.writeElement("ITEMID", this.itemId);
        xml.writeElement("BILLABLE", this.billable);
        xml.writeElement("DESCRIPTION", this.description);
        xml.writeElement("ISMILESTONE", this.milestone);
        xml.writeElement("UTILIZED", this.utilized);
        xml.writeElement("PRIORITY", this.priority);
        xml.writeElement("TASKNO", this.wbsCode);
        xml.writeElement("TASKSTATUS", this.taskStatus);
        xml.writeElement("TIMETYPENAME", this.timeType);
        xml.writeElement("PARENTKEY", this.parentTaskRecordNo);
        xml.writeElement("SUPDOCID", this.attachmentsId);
        xml.writeElement("BUDGETQTY", this.plannedDuration);
        xml.writeElement("ESTQTY", this.estimatedDuration);
        xml.writeCustomFieldsImplicit(this.customFields);
        xml.writeEndElement(); // TASK
        xml.writeEndElement(); // update
        xml.writeEndElement(); // function
    }
}
exports.default = TaskUpdate;
//# sourceMappingURL=TaskUpdate.js.map