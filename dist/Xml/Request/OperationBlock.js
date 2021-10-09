"use strict";
/**
 * @module Intacct/SDK/Xml/Request
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LoginCredentials_1 = require("../../Credentials/LoginCredentials");
const SessionCredentials_1 = require("../../Credentials/SessionCredentials");
const LoginAuthentication_1 = require("./LoginAuthentication");
const SessionAuthentication_1 = require("./SessionAuthentication");
class OperationBlock {
    constructor(clientConfig, requestConfig, content) {
        this.transaction = requestConfig.transaction;
        const credentials = clientConfig.credentials;
        if (credentials != null && credentials instanceof SessionCredentials_1.default) {
            this.authentication = new SessionAuthentication_1.default(credentials.sessionId);
        }
        else if (credentials != null && credentials instanceof LoginCredentials_1.default) {
            this.authentication = new LoginAuthentication_1.default(credentials.userId, credentials.companyId, credentials.password, credentials.entityId);
        }
        else if (clientConfig.sessionId != null) {
            this.authentication = new SessionAuthentication_1.default(clientConfig.sessionId);
        }
        else if (clientConfig.companyId != null
            && clientConfig.userId != null
            && clientConfig.userPassword != null) {
            this.authentication = new LoginAuthentication_1.default(clientConfig.userId, clientConfig.companyId, clientConfig.userPassword, clientConfig.entityId);
        }
        else {
            throw new Error("Authentication credentials [Company ID, User ID, and User Password] or [Session ID] " +
                "are required and cannot be blank.");
        }
        this.content = content;
    }
    writeXml(xml) {
        xml.writeStartElement("operation");
        xml.writeAttribute("transaction", this.transaction === true ? "true" : "false");
        this.authentication.writeXml(xml);
        xml.writeStartElement("content");
        for (const apiFunction of this.content) {
            apiFunction.writeXml(xml);
        }
        xml.writeEndElement(); // content
        xml.writeEndElement(); // operation
    }
}
exports.default = OperationBlock;
//# sourceMappingURL=OperationBlock.js.map