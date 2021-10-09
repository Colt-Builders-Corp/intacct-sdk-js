/**
 * @module Intacct/SDK/Xml/Response
 */
export default class Authentication {
    private _status;
    get status(): string;
    private _userId;
    get userId(): string;
    private _companyId;
    get companyId(): string;
    private _entityId;
    get entityId(): string;
    private _sessionTimestamp;
    get sessionTimestamp(): string;
    private _sessionTimeout;
    get sessionTimeout(): string;
    constructor(authentication: object);
}
