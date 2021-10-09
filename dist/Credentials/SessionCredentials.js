"use strict";
/**
 * @module Intacct/SDK/Credentials
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Endpoint_1 = require("./Endpoint");
class SessionCredentials {
    constructor(config, senderCreds) {
        if (config.sessionId == null || config.sessionId === "") {
            throw new Error("Required Session ID not supplied in config");
        }
        this.sessionId = config.sessionId;
        if (config.endpointUrl != null) {
            this.endpoint = new Endpoint_1.default(config);
        }
        else {
            this.endpoint = senderCreds.endpoint;
        }
        this.senderCreds = senderCreds;
    }
}
exports.default = SessionCredentials;
//# sourceMappingURL=SessionCredentials.js.map