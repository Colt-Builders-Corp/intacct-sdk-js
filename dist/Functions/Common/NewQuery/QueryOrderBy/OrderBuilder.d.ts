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
import IOrder from "./IOrder";
export default class OrderBuilder {
    private orderList;
    constructor();
    /**
     * Adds an ascending order for given fieldName to list of orders
     *
     * @param fieldName
     *
     * @return OrderBuilder
     */
    addAscending(fieldName: string): OrderBuilder;
    /**
     * Adds a descending order for given fieldName to list of orders
     *
     * @param fieldName
     *
     * @return OrderBuilder
     */
    addDescending(fieldName: string): OrderBuilder;
    get orders(): IOrder[];
}
