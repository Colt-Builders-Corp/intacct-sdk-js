"use strict";
/**
 * @module Intacct/SDK/Credentials
 */
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
const url = require("url");
class Endpoint {
    constructor(config) {
        if (config.endpointUrl == null) {
            this.url = process.env[Endpoint.ENDPOINT_URL_ENV_NAME];
        }
        else {
            this.url = config.endpointUrl;
        }
    }
    static isDomainValid(hostname) {
        const checkMainDomain = "." + Endpoint.DOMAIN_NAME;
        const checkFQDNDomain = "." + Endpoint.FULL_QUALIFIED_DOMAIN_NAME;
        return (hostname.substr(-checkMainDomain.length) === checkMainDomain) ||
            (hostname.substr(-checkFQDNDomain.length) === checkFQDNDomain);
    }
    get url() {
        return this._url;
    }
    set url(address) {
        if (address == null || address === "") {
            address = Endpoint.DEFAULT_ENDPOINT;
        }
        const parsedUrl = url.parse(address);
        if (!Endpoint.isDomainValid(parsedUrl.hostname)) {
            throw new Error("Endpoint URL is not a valid " + Endpoint.DOMAIN_NAME + " domain name.");
        }
        this._url = address;
    }
}
exports.default = Endpoint;
Endpoint.DEFAULT_ENDPOINT = "https://api.intacct.com/ia/xml/xmlgw.phtml";
Endpoint.ENDPOINT_URL_ENV_NAME = "INTACCT_ENDPOINT_URL";
Endpoint.DOMAIN_NAME = "intacct.com";
Endpoint.FULL_QUALIFIED_DOMAIN_NAME = Endpoint.DOMAIN_NAME + ".";
//# sourceMappingURL=Endpoint.js.map