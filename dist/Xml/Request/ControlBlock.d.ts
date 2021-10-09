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
import RequestConfig from "../../RequestConfig";
import IaXmlWriter from "../IaXmlWriter";
import IXmlObject from "../IXmlObject";
export default class ControlBlock implements IXmlObject {
    private _senderId;
    get senderId(): string;
    set senderId(senderId: string);
    private _password;
    get password(): string;
    set password(password: string);
    private _controlId;
    get controlId(): string;
    set controlId(controlId: string);
    private _uniqueId;
    get uniqueId(): boolean;
    set uniqueId(uniqueId: boolean);
    private _dtdVersion;
    get dtdVersion(): string;
    private _policyId;
    get policyId(): string;
    set policyId(policyId: string);
    private _includeWhitespace;
    get includeWhitespace(): boolean;
    set includeWhitespace(includeWhitespace: boolean);
    constructor(clientConfig: ClientConfig, requestConfig: RequestConfig);
    writeXml(xml: IaXmlWriter): void;
}
