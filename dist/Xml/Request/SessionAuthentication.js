"use strict";
/**
 * @module Intacct/SDK/Xml/Request
 */
Object.defineProperty(exports, "__esModule", { value: true });
class SessionAuthentication {
    constructor(sessionId) {
        this.sessionId = sessionId;
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(sessionId) {
        if (sessionId == null || sessionId === "") {
            throw new Error("Session ID is required and cannot be blank");
        }
        this._sessionId = sessionId;
    }
    writeXml(xml) {
        xml.writeStartElement("authentication");
        xml.writeElement("sessionid", this.sessionId);
        xml.writeEndElement(); // authentication
    }
}
exports.default = SessionAuthentication;
//# sourceMappingURL=SessionAuthentication.js.map