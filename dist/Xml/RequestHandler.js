"use strict";
/**
 * @module Intacct/SDK/Xml
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
const contentType = require("content-type");
const node_fetch_1 = require("node-fetch");
const Endpoint_1 = require("../Credentials/Endpoint");
const SessionCredentials_1 = require("../Credentials/SessionCredentials");
const HttpClientHandler_1 = require("./HttpClientHandler");
const LoggingHandler_1 = require("./LoggingHandler");
const OfflineResponse_1 = require("./OfflineResponse");
const OnlineResponse_1 = require("./OnlineResponse");
const RequestBlock_1 = require("./RequestBlock");
class RequestHandler {
    constructor(clientConfig, requestConfig) {
        const packageInfo = require("../../package.json");
        this.version = packageInfo.version;
        if (clientConfig.endpointUrl != null && clientConfig.endpointUrl !== "") {
            this.endpointUrl = clientConfig.endpointUrl;
        }
        else {
            const endpoint = new Endpoint_1.default(clientConfig);
            this.endpointUrl = endpoint.url;
        }
        this.clientConfig = clientConfig;
        this.requestConfig = requestConfig;
    }
    executeOnline(content) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.requestConfig.policyId != null && this.requestConfig.policyId !== "") {
                this.requestConfig.policyId = "";
            }
            const request = new RequestBlock_1.default(this.clientConfig, this.requestConfig, content);
            return yield this.execute(request.writeXml()).then((body) => {
                return new OnlineResponse_1.default(body);
            });
        });
    }
    executeOffline(content) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.requestConfig.policyId == null || this.requestConfig.policyId === "") {
                throw new Error("Required Policy ID not supplied in config for offline request");
            }
            if (this.clientConfig.logger != null
                && (this.clientConfig.sessionId != null && this.clientConfig.sessionId !== ""
                    || this.clientConfig.credentials instanceof SessionCredentials_1.default)) {
                this.clientConfig.logger.warn("Offline execution sent to Intacct using Session-based credentials. "
                    + "Use Login-based credentials instead to avoid session timeouts.");
            }
            const request = new RequestBlock_1.default(this.clientConfig, this.requestConfig, content);
            return yield this.execute(request.writeXml()).then((body) => {
                return new OfflineResponse_1.default(body);
            });
        });
    }
    getHttpClient(options) {
        if (this.clientConfig.logger != null) {
            return new LoggingHandler_1.default(options, this.clientConfig.logger, this.clientConfig.logMessageFormatter, this.clientConfig.logLevel);
        }
        else {
            return new HttpClientHandler_1.default(options);
        }
    }
    execute(xml) {
        return __awaiter(this, void 0, void 0, function* () {
            const httpClient = this.getHttpClient({
                url: this.endpointUrl,
                method: "POST",
                timeout: this.requestConfig.maxTimeout,
                simple: false,
                resolveWithFullResponse: true,
                body: xml,
                gzip: true,
                headers: {
                    "Content-Type": "application/xml",
                    "Accept-Encoding": "gzip",
                    "User-Agent": "intacct-sdk-js-client/" + this.version,
                },
                size: 0,
            });
            for (let attempt = 0; attempt <= this.requestConfig.maxRetries; attempt++) {
                if (attempt > 0) {
                    // Delay this retry based on exponential delay
                    yield this.exponentialDelay(attempt);
                }
                const result = yield httpClient.postAsync();
                const response = result[0];
                const body = result[1];
                let ok = true;
                if (response.status >= 400 && response.status < 600) {
                    ok = false;
                }
                if (ok === true) {
                    return body;
                }
                else if (this.requestConfig.noRetryServerErrorCodes.indexOf(response.status) !== -1) {
                    // Do not retry this explicitly set 500 level server error
                    throw new node_fetch_1.FetchError(response.status, body, httpClient.options, response);
                }
                else if (response.status >= 500 && response.status <= 599) {
                    // Retry 500 level server errors
                    continue;
                }
                else {
                    const contentTypeObj = contentType.parse(response.headers.get("content-type"));
                    const mimeType = contentTypeObj.type;
                    if (mimeType === "text/xml" || mimeType === "application/xml") {
                        return body;
                    }
                    throw new node_fetch_1.FetchError(response.status, body, httpClient.options, response);
                }
            }
            throw new Error("Request retry count exceeded max retry count: " + this.requestConfig.maxRetries.toString());
        });
    }
    delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    exponentialDelay(retries) {
        return __awaiter(this, void 0, void 0, function* () {
            const delay = Math.pow(2, retries - 1) * 1000;
            yield this.delay(delay);
        });
    }
}
exports.default = RequestHandler;
//# sourceMappingURL=RequestHandler.js.map