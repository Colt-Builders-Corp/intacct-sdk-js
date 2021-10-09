"use strict";
/**
 * @module Intacct/SDK/Functions/Common/NewQuery/QueryOrderBy
 */
Object.defineProperty(exports, "__esModule", { value: true });
const OrderAscending_1 = require("./OrderAscending");
const OrderDescending_1 = require("./OrderDescending");
class OrderBuilder {
    constructor() {
        this.orderList = [];
    }
    /**
     * Adds an ascending order for given fieldName to list of orders
     *
     * @param fieldName
     *
     * @return OrderBuilder
     */
    addAscending(fieldName) {
        const currentOrderField = new OrderAscending_1.default(fieldName);
        this.orderList.push(currentOrderField);
        return this;
    }
    /**
     * Adds a descending order for given fieldName to list of orders
     *
     * @param fieldName
     *
     * @return OrderBuilder
     */
    addDescending(fieldName) {
        const currentOrderField = new OrderDescending_1.default(fieldName);
        this.orderList.push(currentOrderField);
        return this;
    }
    get orders() {
        return this.orderList;
    }
}
exports.default = OrderBuilder;
//# sourceMappingURL=OrderBuilder.js.map