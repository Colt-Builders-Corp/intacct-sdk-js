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
import { Logger } from "winston";
import ICredentials from "./Credentials/ICredentials";
import MessageFormatter from "./Logging/MessageFormatter";
export default class ClientConfig {
    profileFile: string;
    profileName: string;
    endpointUrl: string;
    senderId: string;
    senderPassword: string;
    sessionId: string;
    sessionTimestamp: string;
    sessionTimeout: string;
    companyId: string;
    entityId: string;
    userId: string;
    userPassword: string;
    credentials: ICredentials;
    logger: Logger;
    logLevel: string;
    logMessageFormatter: MessageFormatter;
    constructor();
}
