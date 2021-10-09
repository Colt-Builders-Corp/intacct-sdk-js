"use strict";
/**
 * @module Intacct/SDK/Functions/Common/NewQuery/QueryOrderBy
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
const AbstractOrderDirection_1 = require("./AbstractOrderDirection");
class OrderDescending extends AbstractOrderDirection_1.default {
    constructor(fieldName) {
        super(fieldName);
    }
    /**
     * Returns descending direction
     *
     * @return string
     */
    getDirection() {
        return AbstractOrderDirection_1.default.DESCENDING;
    }
}
exports.default = OrderDescending;
//# sourceMappingURL=OrderDescending.js.map