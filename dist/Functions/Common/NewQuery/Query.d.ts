/**
 * @module Intacct/SDK/Functions/Common/NewQuery
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
import IaXmlWriter from "../../../Xml/IaXmlWriter";
import AbstractFunction from "../../AbstractFunction";
import IQueryFunction from "./IQueryFunction";
import IFilter from "./QueryFilter/IFilter";
import IOrder from "./QueryOrderBy/IOrder";
import ISelect from "./QuerySelect/ISelect";
export default class Query extends AbstractFunction implements IQueryFunction {
    selectFields: ISelect[];
    fromObject: string;
    filter: IFilter;
    docParId: string;
    orderBy: IOrder[];
    caseInsensitive: boolean;
    showPrivate: boolean;
    pageSize: number;
    offset: number;
    /**
     * Add Field list for this query
     * @param {ISelect[]} selectFields
     *
     * @return IQueryFunction
     */
    assignSelectFields(selectFields: ISelect[]): IQueryFunction;
    /**
     * Add object name for given fromObject for this query
     * @param {string} fromObject
     *
     * @return IQueryFunction
     */
    assignFromObject(fromObject: string): IQueryFunction;
    /**
     * Add docParId for this query
     * @param {string} docParId
     *
     * @return IQueryFunction
     */
    assignDocParId(docParId: string): IQueryFunction;
    /**
     * Add Filter for this query
     * @param filter
     */
    assignFilter(filter: IFilter): IQueryFunction;
    /**
     * Add Order by list for this query
     * @param {IOrder[]} orderBy
     *
     * @return IOrder[]
     */
    assignOrderBy(orderBy: IOrder[]): IQueryFunction;
    /**
     * Add case insensitive for this query
     * @param {boolean} caseInsensitive
     *
     * @return IQueryFunction
     */
    assignCaseInsensitive(caseInsensitive: boolean): IQueryFunction;
    /**
     * Add show private for this query
     * @param showPrivate
     *
     * @return IQueryFunction
     */
    assignShowPrivate(showPrivate: boolean): IQueryFunction;
    /**
     * Add page size for this query
     * @param {number} pageSize
     *
     * @return IQueryFunction
     */
    assignPageSize(pageSize: number): IQueryFunction;
    /**
     * Add offset for this query
     * @param {number} offset
     *
     * @return IQueryFunction
     */
    assignOffset(offset: number): IQueryFunction;
    writeXml(xml: IaXmlWriter): void;
}
