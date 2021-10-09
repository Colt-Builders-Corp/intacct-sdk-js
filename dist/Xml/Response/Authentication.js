"use strict";
/**
 * @module Intacct/SDK/Xml/Response
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
const IntacctException_1 = require("../../Exceptions/IntacctException");
class Authentication {
    constructor(authentication) {
        if (!authentication.hasOwnProperty("status")) {
            throw new IntacctException_1.default("Authentication block is missing status element");
        }
        if (!authentication.hasOwnProperty("userid")) {
            throw new IntacctException_1.default("Authentication block is missing userid element");
        }
        if (!authentication.hasOwnProperty("companyid")) {
            throw new IntacctException_1.default("Authentication block is missing companyid element");
        }
        this._status = authentication["status"];
        this._userId = authentication["userid"];
        this._companyId = authentication["companyid"];
        this._entityId = authentication["locationid"];
        this._sessionTimestamp = authentication["sessiontimestamp"];
        this._sessionTimeout = authentication["sessiontimeout"];
        // TODO add getter/setter for elements: clientstatus, clientid
    }
    get status() {
        return this._status;
    }
    get userId() {
        return this._userId;
    }
    get companyId() {
        return this._companyId;
    }
    get entityId() {
        return this._entityId;
    }
    get sessionTimestamp() {
        return this._sessionTimestamp;
    }
    get sessionTimeout() {
        return this._sessionTimeout;
    }
}
exports.default = Authentication;
//# sourceMappingURL=Authentication.js.map