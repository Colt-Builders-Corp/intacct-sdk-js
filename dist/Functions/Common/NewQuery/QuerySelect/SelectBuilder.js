"use strict";
/**
 * @module Intacct/SDK/Functions/Common/NewQuery/QuerySelect
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
const AbstractSelectFunction_1 = require("./AbstractSelectFunction");
const Field_1 = require("./Field");
const SelectFunctionFactory_1 = require("./SelectFunctionFactory");
class SelectBuilder {
    constructor() {
        this.selectList = [];
        this.factory = new SelectFunctionFactory_1.default();
    }
    /**
     * Add Field for given fieldName to list for select
     * @param {string} fieldName
     *
     * @return SelectBuilder
     */
    addField(fieldName) {
        const currentSelectField = new Field_1.default(fieldName);
        this.selectList.push(currentSelectField);
        return this;
    }
    /**
     * Add Fields for given list of fieldNames to list for select
     * @param {string[]} fieldNames
     *
     * @return SelectBuilder
     */
    addFields(fieldNames) {
        if (fieldNames == null || fieldNames.length < 1) {
            throw new Error("Empty list not allowed for fields.  Provide at least 1 field name in list.");
        }
        for (const fieldName of fieldNames) {
            this.addField(fieldName);
        }
        return this;
    }
    /**
     * Add Average for given fieldName to list for select
     * @param {string} fieldName
     *
     * @return SelectBuilder
     */
    addAverage(fieldName) {
        const currentSelectField = this.factory.create(AbstractSelectFunction_1.default.AVERAGE, fieldName);
        this.selectList.push(currentSelectField);
        return this;
    }
    /**
     * Add Count for given fieldName to list for select
     * @param {string} fieldName
     *
     * @return SelectBuilder
     */
    addCount(fieldName) {
        const currentSelectField = this.factory.create(AbstractSelectFunction_1.default.COUNT, fieldName);
        this.selectList.push(currentSelectField);
        return this;
    }
    /**
     * Add Minimum for given fieldName to list for select
     * @param {string} fieldName
     *
     * @return SelectBuilder
     */
    addMinimum(fieldName) {
        const currentSelectField = this.factory.create(AbstractSelectFunction_1.default.MINIMUM, fieldName);
        this.selectList.push(currentSelectField);
        return this;
    }
    /**
     * Add Maximum for given fieldName to list for select
     * @param {string} fieldName
     *
     * @return SelectBuilder
     */
    addMaximum(fieldName) {
        const currentSelectField = this.factory.create(AbstractSelectFunction_1.default.MAXIMUM, fieldName);
        this.selectList.push(currentSelectField);
        return this;
    }
    /**
     * Add Sum for given fieldName to list for select
     * @param {string} fieldName
     *
     * @return SelectBuilder
     */
    addSum(fieldName) {
        const currentSelectField = this.factory.create(AbstractSelectFunction_1.default.SUM, fieldName);
        this.selectList.push(currentSelectField);
        return this;
    }
    get selects() {
        return this.selectList;
    }
}
exports.default = SelectBuilder;
//# sourceMappingURL=SelectBuilder.js.map