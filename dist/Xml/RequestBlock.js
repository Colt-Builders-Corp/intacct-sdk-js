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
const xmlbuilder = require("xmlbuilder");
const IaXmlWriter_1 = require("./IaXmlWriter");
const ControlBlock_1 = require("./Request/ControlBlock");
const OperationBlock_1 = require("./Request/OperationBlock");
class RequestBlock {
    constructor(clientConfig, requestConfig, content) {
        this.encoding = requestConfig.encoding;
        this.controlBlock = new ControlBlock_1.default(clientConfig, requestConfig);
        this.operationBlock = new OperationBlock_1.default(clientConfig, requestConfig, content);
    }
    get encoding() {
        return this._encoding;
    }
    set encoding(encoding) {
        if (encoding == null) {
            encoding = "utf-8";
        }
        // TODO Can this validate it is a supported encoding by the system?
        this._encoding = encoding;
    }
    writeXml() {
        const xml = new IaXmlWriter_1.default(xmlbuilder.create("request", {
            "version": "1.0",
            "encoding": this.encoding,
            "standalone": null,
        }));
        this.controlBlock.writeXml(xml);
        this.operationBlock.writeXml(xml);
        return xml.flush(false);
    }
}
exports.default = RequestBlock;
//# sourceMappingURL=RequestBlock.js.map