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
const xml2js = require("xml2js");
const IntacctException_1 = require("../Exceptions/IntacctException");
const ResponseException_1 = require("../Exceptions/ResponseException");
const Control_1 = require("./Response/Control");
const ErrorMessage_1 = require("./Response/ErrorMessage");
class AbstractResponse {
    constructor(body) {
        const options = {
            explicitArray: false,
        };
        xml2js.parseString(body, options, (err, xmlObject) => {
            if (err) {
                throw err;
            }
            this._xml = xmlObject;
            if (!this.xml.hasOwnProperty("response")) {
                throw new IntacctException_1.default("Response XML is missing root response element");
            }
            if (!this.xml["response"].hasOwnProperty("control")) {
                throw new IntacctException_1.default("Response block is missing control element");
            }
            this._control = new Control_1.default(this.xml["response"]["control"]);
            if (this.control.status !== "success") {
                let errors = [];
                if (this.xml["response"].hasOwnProperty("errormessage")) {
                    const errorMessage = new ErrorMessage_1.default(this.xml["response"]["errormessage"]);
                    errors = errorMessage.errors;
                }
                throw new ResponseException_1.default("Response control status failure", errors);
            }
        });
    }
    get xml() {
        return this._xml;
    }
    get control() {
        return this._control;
    }
}
exports.default = AbstractResponse;
//# sourceMappingURL=AbstractResponse.js.map