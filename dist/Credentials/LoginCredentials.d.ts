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
import ICredentials from "./ICredentials";
import SenderCredentials from "./SenderCredentials";
export default class LoginCredentials implements ICredentials {
    static readonly COMPANY_PROFILE_ENV_NAME = "INTACCT_COMPANY_PROFILE";
    static readonly COMPANY_ID_ENV_NAME = "INTACCT_COMPANY_ID";
    static readonly ENTITY_ID_ENV_NAME = "INTACCT_ENTITY_ID";
    static readonly USER_ID_ENV_NAME = "INTACCT_USER_ID";
    static readonly USER_PASSWORD_ENV_NAME = "INTACCT_USER_PASSWORD";
    static readonly DEFAULT_COMPANY_PROFILE = "default";
    companyId: string;
    entityId: string;
    userId: string;
    password: string;
    senderCreds: SenderCredentials;
    get endpoint(): Endpoint;
    constructor(config: ClientConfig, senderCreds: SenderCredentials);
}
