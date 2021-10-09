/**
 * @module Intacct/SDK/Functions/Common
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
import IaXmlWriter from "../../Xml/IaXmlWriter";
import AbstractFunction from "../AbstractFunction";
import IQuery from "./Query/IQuery";
export default class ReadByQuery extends AbstractFunction {
    private static readonly MIN_PAGE_SIZE;
    private static readonly MAX_PAGE_SIZE;
    private static readonly DEFAULT_PAGE_SIZE;
    objectName: string;
    fields: string[];
    query: IQuery;
    docParId: string;
    private _pageSize;
    get pageSize(): number;
    set pageSize(pageSize: number);
    constructor(controlId?: string);
    writeXml(xml: IaXmlWriter): void;
}
