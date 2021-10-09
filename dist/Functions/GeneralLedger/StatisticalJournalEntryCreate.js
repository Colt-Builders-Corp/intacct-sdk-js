"use strict";
/**
 * @module Intacct/SDK/Functions/GeneralLedger
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
const AbstractStatisticalJournalEntry_1 = require("./AbstractStatisticalJournalEntry");
class StatisticalJournalEntryCreate extends AbstractStatisticalJournalEntry_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create");
        xml.writeStartElement("GLBATCH");
        xml.writeElement("JOURNAL", this.journalSymbol, true);
        xml.writeElementDate("BATCH_DATE", this.postingDate, IaXmlWriter_1.default.intacctDateFormat, true);
        xml.writeElementDate("REVERSEDATE", this.reverseDate, IaXmlWriter_1.default.intacctDateFormat);
        xml.writeElement("BATCH_TITLE", this.description, true);
        xml.writeElement("HISTORY_COMMENT", this.historyComment);
        xml.writeElement("REFERENCENO", this.referenceNumber);
        xml.writeElement("SUPDOCID", this.attachmentsId);
        xml.writeElement("STATE", this.action);
        xml.writeCustomFieldsImplicit(this.customFields);
        xml.writeStartElement("ENTRIES");
        if (this.lines.length > 0) {
            for (const line of this.lines) {
                line.writeXml(xml);
            }
        }
        xml.writeEndElement(); // ENTRIES
        xml.writeEndElement(); // GLBATCH
        xml.writeEndElement(); // create
        xml.writeEndElement(); // function
    }
}
exports.default = StatisticalJournalEntryCreate;
//# sourceMappingURL=StatisticalJournalEntryCreate.js.map