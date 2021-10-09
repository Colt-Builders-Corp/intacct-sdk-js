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
const IntacctException_1 = require("../Exceptions/IntacctException");
const AbstractResponse_1 = require("./AbstractResponse");
class OfflineResponse extends AbstractResponse_1.default {
    constructor(body) {
        super(body);
        if (!this.xml["response"].hasOwnProperty("acknowledgement")) {
            throw new IntacctException_1.default("Response block is missing acknowledgement block");
        }
        if (!this.xml["response"]["acknowledgement"].hasOwnProperty("status")) {
            throw new IntacctException_1.default("Acknowledgement block is missing status element");
        }
        this._status = this.xml["response"]["acknowledgement"]["status"];
    }
    get status() {
        return this._status;
    }
}
exports.default = OfflineResponse;
//# sourceMappingURL=OfflineResponse.js.map