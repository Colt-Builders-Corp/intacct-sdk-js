/**
 * @module Intacct/SDK/Xml
 */
import Control from "./Response/Control";
export default abstract class AbstractResponse {
    protected _xml: object;
    get xml(): object;
    private _control;
    get control(): Control;
    constructor(body: string);
}
