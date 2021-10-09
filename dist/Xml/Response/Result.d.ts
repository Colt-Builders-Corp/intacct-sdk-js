/**
 * @module Intacct/SDK/Xml/Response
 */
export default class Result {
    private _status;
    get status(): string;
    private _functionName;
    get functionName(): string;
    private _controlId;
    get controlId(): string;
    private _data;
    get data(): any[];
    private _listType;
    get listType(): string;
    private _count;
    get count(): number;
    private _totalCount;
    get totalCount(): number;
    private _numRemaining;
    get numRemaining(): number;
    private _resultId;
    get resultId(): string;
    private _key;
    get key(): string;
    private _start;
    get start(): number;
    private _end;
    get end(): number;
    private _errors;
    get errors(): string[];
    constructor(result: object);
    ensureStatusSuccess(): void;
    ensureStatusNotFailure(): void;
}
