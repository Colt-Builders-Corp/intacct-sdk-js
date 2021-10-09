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
const AbstractClient_1 = require("./AbstractClient");
const RequestConfig_1 = require("./RequestConfig");
class OnlineClient extends AbstractClient_1.default {
    /**
     * Execute one Sage Intacct API function
     *
     * @param {IFunction} apiFunction
     * @param {RequestConfig} requestConfig
     * @return {Promise<OnlineResponse>}
     */
    execute(apiFunction, requestConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!requestConfig) {
                requestConfig = new RequestConfig_1.default();
            }
            const apiFunctions = [
                apiFunction,
            ];
            const response = yield this.executeOnlineRequest(apiFunctions, requestConfig);
            response.results[0].ensureStatusSuccess();
            return response;
        });
    }
    /**
     * Execute multiple Sage Intacct API functions
     *
     * @param {IFunction[]} apiFunctions
     * @param {RequestConfig} requestConfig
     * @return {Promise<OnlineResponse>}
     */
    executeBatch(apiFunctions, requestConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!requestConfig) {
                requestConfig = new RequestConfig_1.default();
            }
            const response = yield this.executeOnlineRequest(apiFunctions, requestConfig);
            if (requestConfig.transaction === true) {
                for (const result of response.results) {
                    result.ensureStatusNotFailure();
                }
            }
            return response;
        });
    }
}
exports.default = OnlineClient;
//# sourceMappingURL=OnlineClient.js.map