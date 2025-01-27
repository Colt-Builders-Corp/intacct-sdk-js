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
import AbstractClient from "./AbstractClient";
import IFunction from "./Functions/IFunction";
import RequestConfig from "./RequestConfig";
import OnlineResponse from "./Xml/OnlineResponse";
export default class OnlineClient extends AbstractClient {
    /**
     * Execute one Sage Intacct API function
     *
     * @param {IFunction} apiFunction
     * @param {RequestConfig} requestConfig
     * @return {Promise<OnlineResponse>}
     */
    execute(apiFunction: IFunction, requestConfig?: RequestConfig): Promise<OnlineResponse>;
    /**
     * Execute multiple Sage Intacct API functions
     *
     * @param {IFunction[]} apiFunctions
     * @param {RequestConfig} requestConfig
     * @return {Promise<OnlineResponse>}
     */
    executeBatch(apiFunctions: IFunction[], requestConfig?: RequestConfig): Promise<OnlineResponse>;
}
