"use strict";
/**
 * @module Intacct/SDK/Functions/Common/NewQuery/QueryFilter
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
const util_1 = require("util");
class Filter {
    constructor(fieldName) {
        this.fieldName = fieldName;
        if (!fieldName) {
            throw new Error("fieldName is required for Filter.");
        }
        this.fieldName = fieldName;
        this.value = null;
        this.operation = null;
    }
    /**
     * Sets given value and operation to equal to for this filter
     * @param value
     * @return IFilter
     */
    equalTo(value) {
        if (value == null) {
            throw new Error("null not allowed. Provide string value for equalTo function.");
        }
        this.value = value;
        this.operation = Filter.EQUAL_TO;
        return this;
    }
    /**
     * Sets given value and operation to not equal to for this filter
     * @param value
     * @return IFilter
     */
    notEqualTo(value) {
        if (value == null) {
            throw new Error("null not allowed. Provide string value for notEqualTo function.");
        }
        this.value = value;
        this.operation = Filter.NOT_EQUAL_TO;
        return this;
    }
    /**
     * Sets given value and operation to less than for this filter
     * @param value
     * @return IFilter
     */
    lessThan(value) {
        if (value == null) {
            throw new Error("null not allowed. Provide string value for lessThan function.");
        }
        this.value = value;
        this.operation = Filter.LESS_THAN;
        return this;
    }
    /**
     * Sets given value and operation to less than or equal to for this filter
     * @param value
     * @return IFilter
     */
    lessThanOrEqualTo(value) {
        if (value == null) {
            throw new Error("null not allowed. Provide string value for lessThanOrEqualTo function.");
        }
        this.value = value;
        this.operation = Filter.LESS_THAN_OR_EQUAL_TO;
        return this;
    }
    /**
     * Sets given value and operation to greater than for this filter
     * @param value
     * @return IFilter
     */
    greaterThan(value) {
        if (value == null) {
            throw new Error("null not allowed. Provide string value for greaterThan function.");
        }
        this.value = value;
        this.operation = Filter.GREATER_THAN;
        return this;
    }
    /**
     * Sets given value and operation to greater than or equal to for this filter
     * @param value
     * @return IFilter
     */
    greaterThanOrEqualTo(value) {
        if (value == null) {
            // tslint:disable-next-line:max-line-length
            throw new Error("null not allowed. Provide string value for greaterThanOrEqualTo function.");
        }
        this.value = value;
        this.operation = Filter.GREATER_THAN_OR_EQUAL_TO;
        return this;
    }
    /**
     * Sets given value and operation to between for this filter.  Only 2 values allowed.
     * @param min
     * @param max
     * @return IFilter
     */
    between(min, max) {
        if (min == null || max == null) {
            throw new Error("Two strings expected for between filter");
        }
        this.value = [min, max];
        this.operation = Filter.BETWEEN;
        return this;
    }
    /**
     * Sets given values and operation to in for this filter.
     * @param values
     * @return IFilter
     */
    in(values) {
        if (values == null || values.length === 0) {
            throw new Error("At least 1 string in array expected for in for filter");
        }
        this.value = values;
        this.operation = Filter.IN;
        return this;
    }
    /**
     * Sets given values and operation to not in for this filter.
     * @param values
     * @return IFilter
     */
    notIn(values) {
        if (values == null || values.length === 0) {
            throw new Error("At least 1 string in array expected for notIn for filter");
        }
        this.value = values;
        this.operation = Filter.NOT_IN;
        return this;
    }
    /**
     * Sets given values and operation to like for this filter.
     * @param value
     * @return IFilter
     */
    like(value) {
        if (value == null) {
            throw new Error("null not allowed. Provide string value for like function.");
        }
        this.value = value;
        this.operation = Filter.LIKE;
        return this;
    }
    /**
     * Sets given values and operation to not like for this filter.
     * @param value
     * @return IFilter
     */
    notLike(value) {
        if (value == null) {
            throw new Error("null not allowed. Provide string value for notLike function.");
        }
        this.value = value;
        this.operation = Filter.NOT_LIKE;
        return this;
    }
    /**
     * Sets given values and operation to is null for this filter.
     * @return IFilter
     */
    isNull() {
        this.operation = Filter.IS_NULL;
        return this;
    }
    /**
     * Sets given values and operation to is not null for this filter.
     * @return IFilter
     */
    isNotNull() {
        this.operation = Filter.IS_NOT_NULL;
        return this;
    }
    writeXml(xml) {
        if (this.operation) {
            xml.writeStartElement(this.operation);
        }
        else {
            throw new Error("Filter requires 1 method be called before calling writeXml");
        }
        xml.writeElement("field", this.fieldName, false);
        if (this.value !== null) {
            if (util_1.isArray(this.value)) {
                for (const arrayValue of this.value) {
                    xml.writeElement("value", arrayValue, true);
                }
            }
            else {
                xml.writeElement("value", this.value, true);
            }
        }
        xml.writeEndElement(); // close tag from this.operation
    }
}
exports.default = Filter;
Filter.EQUAL_TO = "equalto";
Filter.NOT_EQUAL_TO = "notequalto";
Filter.LESS_THAN = "lessthan";
Filter.LESS_THAN_OR_EQUAL_TO = "lessthanorequalto";
Filter.GREATER_THAN = "greaterthan";
Filter.GREATER_THAN_OR_EQUAL_TO = "greaterthanorequalto";
Filter.BETWEEN = "between";
Filter.IN = "in";
Filter.NOT_IN = "notin";
Filter.LIKE = "like";
Filter.NOT_LIKE = "notlike";
Filter.IS_NULL = "isnull";
Filter.IS_NOT_NULL = "isnotnull";
//# sourceMappingURL=Filter.js.map