"use strict";
/**
 * @module Intacct/SDK
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
class RequestConfig {
    constructor() {
        this.controlId = Date.now().toString();
        this.encoding = "utf-8";
        this.maxRetries = 5;
        this.maxTimeout = 30000;
        this.noRetryServerErrorCodes = [524];
        this.policyId = "";
        this.transaction = false;
        this.uniqueId = false;
    }
    get maxRetries() {
        return this._maxRetries;
    }
    set maxRetries(maxRetries) {
        if (maxRetries < 0) {
            throw new Error("Max Retries must be zero or greater");
        }
        this._maxRetries = maxRetries;
    }
    get maxTimeout() {
        return this._maxTimeout;
    }
    set maxTimeout(maxTimeout) {
        if (maxTimeout < 0) {
            throw new Error("Max Timeout must be zero or greater");
        }
        this._maxTimeout = maxTimeout;
    }
    get noRetryServerErrorCodes() {
        return this._noRetryServerErrorCodes;
    }
    set noRetryServerErrorCodes(noRetryServerErrorCodes) {
        for (const errorCode of noRetryServerErrorCodes) {
            if (errorCode < 500 || errorCode > 599) {
                throw new Error("No Retry Server Error Codes must be between 500-599");
            }
        }
        this._noRetryServerErrorCodes = noRetryServerErrorCodes;
    }
}
exports.default = RequestConfig;
//# sourceMappingURL=RequestConfig.js.map