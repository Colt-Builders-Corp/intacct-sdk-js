"use strict";
/**
 * @module Intacct/SDK/Xml
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
const dateFormat = require("dateformat");
class IaXmlWriter {
    constructor(xml) {
        this._writer = xml;
    }
    flush(pretty = false) {
        if (pretty === true) {
            return this._writer.doc().end({
                "spacebeforeslash": " ",
                "pretty": true,
                "indent": "    ",
            });
        }
        else {
            return this._writer.doc().end({
                "spacebeforeslash": " ",
                "pretty": false,
            });
        }
    }
    writeStartElement(localName) {
        this._writer = this._writer.element(localName);
    }
    writeEndElement() {
        this._writer = this._writer.up();
    }
    writeElement(localName, value, writeNull) {
        if (writeNull === null) {
            writeNull = false;
        }
        if (typeof value === "string") {
            if (value === null) {
                if (writeNull === true) {
                    this._writer.element(localName, value).up();
                }
            }
            else {
                // if value == "" we are writing it
                this._writer.element(localName, value).up();
            }
        }
        else if (typeof value === "number") {
            if (value === null) {
                if (writeNull === true) {
                    this._writer.element(localName, "").up();
                }
            }
            else {
                this._writer.element(localName, value.toString()).up();
            }
        }
        else if (typeof value === "boolean") {
            if (value === true) {
                this._writer.element(localName, "true").up();
            }
            else if (value === false) {
                this._writer.element(localName, "false").up();
            }
            else {
                if (writeNull === true) {
                    this._writer.element(localName, "").up();
                }
            }
        }
        else if (value instanceof Date) {
            if (value === null) {
                if (writeNull === true) {
                    this._writer.element(localName, "").up();
                }
            }
            else {
                this._writer.element(localName, dateFormat(value, IaXmlWriter.intacctDateTimeFormat)).up();
            }
        }
        else {
            if (value == null) {
                if (writeNull === true) {
                    this._writer.element(localName, "").up();
                }
            }
            else {
                this._writer.element(localName, "").up();
            }
        }
    }
    writeElementDate(localName, value, format, writeNull) {
        if (format === null) {
            format = IaXmlWriter.intacctDateFormat;
        }
        if (writeNull === null) {
            writeNull = false;
        }
        if (value == null) {
            if (writeNull === true) {
                this._writer.element(localName, "").up();
            }
        }
        else {
            const date = dateFormat(value, format);
            this._writer.element(localName, date).up();
        }
    }
    writeAttribute(localName, value, writeNull) {
        if (writeNull === null) {
            writeNull = false;
        }
        if (typeof value === "string") {
            if (value !== null || writeNull === true) {
                this._writer.attribute(localName, value);
            }
        }
        else if (typeof value === "number") {
            if (value === null) {
                if (writeNull === true) {
                    this._writer.attribute(localName, "");
                }
            }
            else {
                this._writer.attribute(localName, value.toString());
            }
        }
        else if (typeof value === "boolean") {
            if (value === true) {
                this._writer.attribute(localName, "true");
            }
            else if (value === false) {
                this._writer.attribute(localName, "false");
            }
            else {
                if (writeNull === true) {
                    this._writer.attribute(localName, "");
                }
            }
        }
    }
    writeDateSplitElements(date, writeNull) {
        if (writeNull === null) {
            writeNull = true;
        }
        this.writeElement("year", dateFormat(date, "yyyy"), writeNull);
        this.writeElement("month", dateFormat(date, "mm"), writeNull);
        this.writeElement("day", dateFormat(date, "dd"), writeNull);
    }
    writeCustomFieldsExplicit(customFields) {
        if (customFields != null && customFields.length > 0) {
            this.writeStartElement("customfields");
            for (const customFieldId in customFields) {
                if (customFields[customFieldId]) {
                    this.writeStartElement("customfield");
                    this.writeElement("customfieldname", customFields[customFieldId][0], true);
                    this.writeElement("customfieldvalue", customFields[customFieldId][1], true);
                    this.writeEndElement(); // customfield
                }
            }
            this.writeEndElement(); // customfields
        }
    }
    writeCustomFieldsImplicit(customFields) {
        if (customFields != null && customFields.length > 0) {
            for (const customFieldId in customFields) {
                if (customFields[customFieldId]) {
                    this.writeElement(customFields[customFieldId][0], customFields[customFieldId][1], true);
                }
            }
        }
    }
}
exports.default = IaXmlWriter;
IaXmlWriter.intacctDateFormat = "mm/dd/yyyy";
IaXmlWriter.intacctDateTimeFormat = "mm/dd/yyyy HH:MM:ss";
IaXmlWriter.intacctMultiSelectGlue = "#~#";
//# sourceMappingURL=IaXmlWriter.js.map