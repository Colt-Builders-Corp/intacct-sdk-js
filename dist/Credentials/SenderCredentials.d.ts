/**
 * @module Intacct/SDK/Credentials
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
import ClientConfig from "../ClientConfig";
import Endpoint from "./Endpoint";
export default class SenderCredentials {
    static readonly SENDER_PROFILE_ENV_NAME = "INTACCT_SENDER_PROFILE";
    static readonly SENDER_ID_ENV_NAME = "INTACCT_SENDER_ID";
    static readonly SENDER_PASSWORD_ENV_NAME = "INTACCT_SENDER_PASSWORD";
    static readonly DEFAULT_SENDER_PROFILE = "default";
    senderId: string;
    password: string;
    endpoint: Endpoint;
    constructor(config: ClientConfig);
}
