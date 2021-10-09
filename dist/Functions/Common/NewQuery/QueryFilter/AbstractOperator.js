"use strict";
/**
 * @module Intacct/SDK/Functions/Common/NewQuery/QueryFilter
 */
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractOperator {
    constructor(filters) {
        this.filters = filters;
        if (!filters) {
            this.filters = [];
        }
        else {
            this.filters = filters;
        }
    }
    /**
     * Adds filter to list in this
     *
     * @param filter
     *
     * @return IFilter
     */
    addFilter(filter) {
        if (filter) {
            this.filters.push(filter);
            return this;
        }
        else {
            throw new Error("filter cannot be null");
        }
    }
    writeXml(xml) {
        if (this.filters && this.filters.length >= 2) {
            xml.writeStartElement(this.getOperator());
            for (const filter of this.filters) {
                filter.writeXml(xml);
            }
            xml.writeEndElement(); // filter
        }
        else {
            throw new Error(`Two or more FilterInterface objects required for ${this.getOperator()}`);
        }
    }
}
exports.default = AbstractOperator;
AbstractOperator.OR = "or";
AbstractOperator.AND = "and";
//# sourceMappingURL=AbstractOperator.js.map