"use strict";
/**
 * @module Intacct/SDK/Functions/Common/Query
 */
Object.defineProperty(exports, "__esModule", { value: true });
class QueryString {
    constructor(query) {
        this.query = !query ? "" : query;
    }
    toString() {
        return this.query;
    }
}
exports.default = QueryString;
//# sourceMappingURL=QueryString.js.map