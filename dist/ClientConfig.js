"use strict";
/**
 * @module Intacct/SDK
 */
Object.defineProperty(exports, "__esModule", { value: true });
const MessageFormatter_1 = require("./Logging/MessageFormatter");
class ClientConfig {
    constructor() {
        this.logLevel = "debug";
        this.logMessageFormatter = new MessageFormatter_1.default();
    }
}
exports.default = ClientConfig;
//# sourceMappingURL=ClientConfig.js.map