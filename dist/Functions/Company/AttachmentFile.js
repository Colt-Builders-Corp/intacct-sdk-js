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
const fs = require("fs");
const path = require("path");
class AttachmentFile {
    get filePath() {
        return this._filePath;
    }
    set filePath(filePath) {
        let ext = path.extname(filePath);
        if (this.fileName == null) {
            this.fileName = path.basename(filePath, ext);
        }
        if (this.extension == null) {
            if (ext.startsWith(".")) {
                ext = ext.substring(1);
            }
            this.extension = ext;
        }
        this._filePath = filePath;
    }
    writeXml(xml) {
        xml.writeStartElement("attachment");
        // The file name without a period or extension - Ex: Invoice21244
        // Needs to be unique from other files in attachment record
        xml.writeElement("attachmentname", this.fileName, true);
        // The file extension without a period - Ex: pdf
        xml.writeElement("attachmenttype", this.extension, true);
        const reader = fs.readFileSync(this.filePath);
        xml.writeElement("attachmentdata", reader.toString("base64"), true);
        xml.writeEndElement(); // attachment
    }
}
exports.default = AttachmentFile;
//# sourceMappingURL=AttachmentFile.js.map