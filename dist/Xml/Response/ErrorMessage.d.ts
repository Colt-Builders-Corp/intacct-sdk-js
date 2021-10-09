/**
 * @module Intacct/SDK/Xml/Response
 */
export default class ErrorMessage {
    private _errors;
    get errors(): string[];
    set errors(errors: string[]);
    constructor(errorMessages: object);
    private combineErrorMessageElements;
}
