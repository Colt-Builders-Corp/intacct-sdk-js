/**
 * @module Intacct/SDK/Functions/Common/NewQuery/QueryOrderBy
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
import IaXmlWriter from "../../../../Xml/IaXmlWriter";
import IOrder from "./IOrder";
export default abstract class AbstractOrderDirection implements IOrder {
    private readonly fieldName;
    static readonly ASCENDING = "ascending";
    static readonly DESCENDING = "descending";
    protected constructor(fieldName: string);
    /**
     * Returns the direction order
     *
     * @return {string}
     */
    abstract getDirection(): string;
    writeXml(xml: IaXmlWriter): void;
}
