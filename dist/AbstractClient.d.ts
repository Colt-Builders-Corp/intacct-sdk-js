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
import ClientConfig from "./ClientConfig";
import IFunction from "./Functions/IFunction";
import RequestConfig from "./RequestConfig";
import OfflineResponse from "./Xml/OfflineResponse";
import OnlineResponse from "./Xml/OnlineResponse";
export default abstract class AbstractClient {
    /**
     * @type {string}
     */
    protected static readonly PROFILE_ENV_NAME = "INTACCT_PROFILE";
    /**
     * @return ClientConfig
     */
    config: ClientConfig;
    /**
     * @param {ClientConfig} config
     */
    constructor(config?: ClientConfig);
    /**
     * @param {IFunction[]} functions
     * @param {RequestConfig} requestConfig
     * @returns {Promise<OnlineResponse>}
     */
    protected executeOnlineRequest(functions: IFunction[], requestConfig?: RequestConfig): Promise<OnlineResponse>;
    /**
     * @param {IFunction[]} functions
     * @param {RequestConfig} requestConfig
     * @returns {Promise<OfflineResponse>}
     */
    protected executeOfflineRequest(functions: IFunction[], requestConfig?: RequestConfig): Promise<OfflineResponse>;
}
