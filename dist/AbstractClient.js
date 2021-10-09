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
const LoginCredentials_1 = require("./Credentials/LoginCredentials");
const SenderCredentials_1 = require("./Credentials/SenderCredentials");
const SessionCredentials_1 = require("./Credentials/SessionCredentials");
const RequestConfig_1 = require("./RequestConfig");
const RequestHandler_1 = require("./Xml/RequestHandler");
class AbstractClient {
    /**
     * @param {ClientConfig} config
     */
    constructor(config) {
        if (!config) {
            config = new ClientConfig_1.default();
        }
        if (config.profileName == null) {
            config.profileName = process.env[AbstractClient.PROFILE_ENV_NAME];
        }
        if (config.credentials instanceof SessionCredentials_1.default
            || config.credentials instanceof LoginCredentials_1.default) {
            // Do not try and load credentials if they are already set in config
        }
        else if (config.sessionId != null) {
            // Load the session credentials
            config.credentials = new SessionCredentials_1.default(config, new SenderCredentials_1.default(config));
        }
        else {
            // Load the login credentials
            config.credentials = new LoginCredentials_1.default(config, new SenderCredentials_1.default(config));
        }
        this.config = config;
    }
    /**
     * @param {IFunction[]} functions
     * @param {RequestConfig} requestConfig
     * @returns {Promise<OnlineResponse>}
     */
    executeOnlineRequest(functions, requestConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!requestConfig) {
                requestConfig = new RequestConfig_1.default();
            }
            const requestHandler = new RequestHandler_1.default(this.config, requestConfig);
            return yield requestHandler.executeOnline(functions);
        });
    }
    /**
     * @param {IFunction[]} functions
     * @param {RequestConfig} requestConfig
     * @returns {Promise<OfflineResponse>}
     */
    executeOfflineRequest(functions, requestConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!requestConfig) {
                requestConfig = new RequestConfig_1.default();
            }
            const requestHandler = new RequestHandler_1.default(this.config, requestConfig);
            return yield requestHandler.executeOffline(functions);
        });
    }
}
exports.default = AbstractClient;
/**
 * @type {string}
 */
AbstractClient.PROFILE_ENV_NAME = "INTACCT_PROFILE";
//# sourceMappingURL=AbstractClient.js.map