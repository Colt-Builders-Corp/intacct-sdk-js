/**
 * @module Intacct/SDK/Xml
 */
import AbstractResponse from "./AbstractResponse";
export default class OfflineResponse extends AbstractResponse {
    private _status;
    get status(): string;
    constructor(body: string);
}
