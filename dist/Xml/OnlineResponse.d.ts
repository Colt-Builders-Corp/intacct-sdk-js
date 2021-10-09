/**
 * @module Intacct/SDK/Xml
 */
import AbstractResponse from "./AbstractResponse";
import Authentication from "./Response/Authentication";
import Result from "./Response/Result";
export default class OnlineResponse extends AbstractResponse {
    private _authentication;
    get authentication(): Authentication;
    private _results;
    get results(): Result[];
    constructor(body: string);
    getResult(key?: number): Result;
}
