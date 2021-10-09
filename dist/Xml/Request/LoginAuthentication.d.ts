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
import IaXmlWriter from "../IaXmlWriter";
import IAuthentication from "./IAuthentication";
export default class LoginAuthentication implements IAuthentication {
    private _companyId;
    private _entityId;
    private _userId;
    private _password;
    get companyId(): string;
    set companyId(companyId: string);
    get entityId(): string;
    set entityId(entityId: string);
    get userId(): string;
    set userId(userId: string);
    get password(): string;
    set password(password: string);
    constructor(userId: string, companyId: string, userPassword: string, entityId?: string);
    writeXml(xml: IaXmlWriter): void;
}
