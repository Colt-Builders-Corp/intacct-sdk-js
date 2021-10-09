"use strict";
/**
 * @module Intacct/SDK/Xml/Request
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ControlBlock {
    constructor(clientConfig, requestConfig) {
        this.senderId = clientConfig.senderId;
        this.password = clientConfig.senderPassword;
        this.controlId = requestConfig.controlId;
        this.uniqueId = requestConfig.uniqueId;
        this.policyId = requestConfig.policyId;
        this.includeWhitespace = false;
        this._dtdVersion = "3.0";
    }
    get senderId() {
        return this._senderId;
    }
    set senderId(senderId) {
        if (senderId == null || senderId === "") {
            throw new Error("Sender ID is required and cannot be blank");
        }
        this._senderId = senderId;
    }
    get password() {
        return this._password;
    }
    set password(password) {
        if (password == null || password === "") {
            throw new Error("Sender Password is required and cannot be blank");
        }
        this._password = password;
    }
    get controlId() {
        return this._controlId;
    }
    set controlId(controlId) {
        if (controlId == null || controlId === "") {
            controlId = Date.now().toString();
        }
        if (controlId.length < 1 || controlId.length > 256) {
            throw new Error("Request control ID must be between 1 and 256 characters in length.");
        }
        this._controlId = controlId;
    }
    get uniqueId() {
        return this._uniqueId;
    }
    set uniqueId(uniqueId) {
        this._uniqueId = uniqueId;
    }
    get dtdVersion() {
        return this._dtdVersion;
    }
    get policyId() {
        return this._policyId;
    }
    set policyId(policyId) {
        this._policyId = policyId;
    }
    get includeWhitespace() {
        return this._includeWhitespace;
    }
    set includeWhitespace(includeWhitespace) {
        this._includeWhitespace = includeWhitespace;
    }
    writeXml(xml) {
        xml.writeStartElement("control");
        xml.writeElement("senderid", this.senderId);
        xml.writeElement("password", this.password);
        xml.writeElement("controlid", this.controlId);
        xml.writeElement("uniqueid", this.uniqueId === true ? "true" : "false");
        xml.writeElement("dtdversion", this.dtdVersion);
        if (this.policyId != null && this.policyId !== "") {
            xml.writeElement("policyid", this.policyId);
        }
        xml.writeElement("includewhitespace", this.includeWhitespace === true ? "true" : "false");
        xml.writeEndElement(); // control
    }
}
exports.default = ControlBlock;
//# sourceMappingURL=ControlBlock.js.map