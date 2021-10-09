/**
 * @module Intacct/SDK/Xml/Request
 */
/**
 * Copyright 2020 Sage Intacct, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "LICENSE" file accompanying this file. This file is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import ClientConfig from "../../ClientConfig";
import IFunction from "../../Functions/IFunction";
import RequestConfig from "../../RequestConfig";
import IaXmlWriter from "../IaXmlWriter";
import IXmlObject from "../IXmlObject";
import IAuthentication from "./IAuthentication";
export default class OperationBlock implements IXmlObject {
    transaction: boolean;
    authentication: IAuthentication;
    content: IFunction[];
    constructor(clientConfig: ClientConfig, requestConfig: RequestConfig, content: IFunction[]);
    writeXml(xml: IaXmlWriter): void;
}
