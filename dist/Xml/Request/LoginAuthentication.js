"use strict";
/**
 * @module Intacct/SDK/Xml/Request
 */
Object.defineProperty(exports, "__esModule", { value: true });
class LoginAuthentication {
    constructor(userId, companyId, userPassword, entityId) {
        this.companyId = companyId;
        this.userId = userId;
        this.password = userPassword;
        this.entityId = entityId !== undefined ? entityId : null;
    }
    get companyId() {
        return this._companyId;
    }
    set companyId(companyId) {
        if (companyId == null || companyId === "") {
            throw new Error("Company ID is required and cannot be blank");
        }
        this._companyId = companyId;
    }
    get entityId() {
        return this._entityId;
    }
    set entityId(entityId) {
        this._entityId = entityId;
    }
    get userId() {
        return this._userId;
    }
    set userId(userId) {
        if (userId == null || userId === "") {
            throw new Error("User ID is required and cannot be blank");
        }
        this._userId = userId;
    }
    get password() {
        return this._password;
    }
    set password(password) {
        if (password == null || password === "") {
            throw new Error("User Password is required and cannot be blank");
        }
        this._password = password;
    }
    writeXml(xml) {
        xml.writeStartElement("authentication");
        xml.writeStartElement("login");
        xml.writeElement("userid", this.userId);
        xml.writeElement("companyid", this.companyId);
        xml.writeElement("password", this.password);
        if (this.entityId != null) {
            xml.writeElement("locationid", this.entityId);
        }
        xml.writeEndElement(); // login
        xml.writeEndElement(); // authentication
    }
}
exports.default = LoginAuthentication;
//# sourceMappingURL=LoginAuthentication.js.map