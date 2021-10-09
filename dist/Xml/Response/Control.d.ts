/**
 * @module Intacct/SDK/Xml/Response
 */
export default class Control {
    private _status;
    get status(): string;
    private _senderId;
    get senderId(): string;
    private _controlId;
    get controlId(): string;
    private _uniqueId;
    get uniqueId(): string;
    private _dtdVersion;
    get dtdVersion(): string;
    constructor(control: object);
}
