/**
 * @module Intacct/SDK/Xml
 */
import ClientConfig from "../ClientConfig";
import IFunction from "../Functions/IFunction";
import RequestConfig from "../RequestConfig";
import ControlBlock from "./Request/ControlBlock";
import OperationBlock from "./Request/OperationBlock";
export default class RequestBlock {
    controlBlock: ControlBlock;
    operationBlock: OperationBlock;
    private _encoding;
    get encoding(): string;
    set encoding(encoding: string);
    constructor(clientConfig: ClientConfig, requestConfig: RequestConfig, content: IFunction[]);
    writeXml(): string;
}
