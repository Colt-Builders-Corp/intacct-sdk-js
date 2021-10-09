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
const util_1 = require("util");
const IntacctException_1 = require("../Exceptions/IntacctException");
const ResponseException_1 = require("../Exceptions/ResponseException");
const AbstractResponse_1 = require("./AbstractResponse");
const Authentication_1 = require("./Response/Authentication");
const ErrorMessage_1 = require("./Response/ErrorMessage");
const Result_1 = require("./Response/Result");
class OnlineResponse extends AbstractResponse_1.default {
    constructor(body) {
        super(body);
        this._results = [];
        if (!util_1.isNullOrUndefined(this.xml) && !this.xml["response"].hasOwnProperty("operation")) {
            throw new IntacctException_1.default("Response block is missing operation block");
        }
        if (!this.xml["response"]["operation"].hasOwnProperty("authentication")) {
            throw new IntacctException_1.default("Authentication block is missing from operation element");
        }
        this._authentication = new Authentication_1.default(this._xml["response"]["operation"]["authentication"]);
        if (this._authentication.status !== "success") {
            const errorMessage = new ErrorMessage_1.default(this._xml["response"]["operation"]["errormessage"]);
            throw new ResponseException_1.default("Response authentication status failure", errorMessage.errors);
        }
        if (!this.xml["response"]["operation"].hasOwnProperty("result")) {
            throw new IntacctException_1.default("Result block is missing from operation element");
        }
        if (this.xml["response"]["operation"].hasOwnProperty("result")) {
            if (util_1.isArray(this.xml["response"]["operation"]["result"])) {
                for (const index in this.xml["response"]["operation"]["result"]) {
                    if (this.xml["response"]["operation"]["result"].hasOwnProperty(index)) {
                        this._results.push(new Result_1.default(this.xml["response"]["operation"]["result"][index]));
                    }
                }
            }
            else {
                this._results.push(new Result_1.default(this.xml["response"]["operation"]["result"]));
            }
        }
    }
    get authentication() {
        return this._authentication;
    }
    get results() {
        return this._results;
    }
    getResult(key = 0) {
        return this._results[key];
    }
}
exports.default = OnlineResponse;
//# sourceMappingURL=OnlineResponse.js.map