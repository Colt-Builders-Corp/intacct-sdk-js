"use strict";
/**
 * @module Intacct/SDK
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const ClientConfig_1 = require("./ClientConfig");
const SenderCredentials_1 = require("./Credentials/SenderCredentials");
const SessionCredentials_1 = require("./Credentials/SessionCredentials");
const ApiSessionCreate_1 = require("./Functions/ApiSessionCreate");
const OnlineClient_1 = require("./OnlineClient");
const RequestConfig_1 = require("./RequestConfig");
class SessionProvider {
    /**
     * @param {ClientConfig} config
     * @return {Promise<ClientConfig>}
     */
    static factory(config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!config) {
                config = new ClientConfig_1.default();
            }
            const requestConfig = new RequestConfig_1.default();
            requestConfig.controlId = "sessionProvider";
            requestConfig.noRetryServerErrorCodes = []; // Retry all 500 level errors
            const apiFunction = new ApiSessionCreate_1.default();
            if (config.sessionId != null && config.entityId != null) {
                apiFunction.entityId = config.entityId;
            }
            const client = new OnlineClient_1.default(config);
            const response = yield client.execute(apiFunction, requestConfig);
            const authentication = response.authentication;
            const result = response.results[0];
            result.ensureStatusSuccess(); // Throw any result errors
            const data = result.data;
            const api = data[0];
            config.sessionId = api["sessionid"].toString();
            config.endpointUrl = api["endpoint"].toString();
            config.entityId = api["locationid"].toString();
            config.companyId = authentication.companyId;
            config.userId = authentication.userId;
            config.sessionTimestamp = authentication.sessionTimestamp;
            config.sessionTimeout = authentication.sessionTimeout;
            config.credentials = new SessionCredentials_1.default(config, new SenderCredentials_1.default(config));
            return config;
        });
    }
}
exports.default = SessionProvider;
//# sourceMappingURL=SessionProvider.js.map