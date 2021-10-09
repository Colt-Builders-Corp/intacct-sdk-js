/**
 * @module Intacct/SDK
 */
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
export default class RequestConfig {
    controlId: string;
    encoding: string;
    policyId: string;
    transaction: boolean;
    uniqueId: boolean;
    private _maxRetries;
    get maxRetries(): number;
    set maxRetries(maxRetries: number);
    private _maxTimeout;
    get maxTimeout(): number;
    set maxTimeout(maxTimeout: number);
    private _noRetryServerErrorCodes;
    get noRetryServerErrorCodes(): number[];
    set noRetryServerErrorCodes(noRetryServerErrorCodes: number[]);
    constructor();
}
