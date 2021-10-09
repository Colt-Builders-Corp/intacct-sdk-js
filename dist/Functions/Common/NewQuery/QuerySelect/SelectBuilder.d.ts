/**
 * @module Intacct/SDK/Functions/Common/NewQuery/QuerySelect
 */
import ISelect from "./ISelect";
export default class SelectBuilder {
    private selectList;
    private factory;
    constructor();
    /**
     * Add Field for given fieldName to list for select
     * @param {string} fieldName
     *
     * @return SelectBuilder
     */
    addField(fieldName: string): SelectBuilder;
    /**
     * Add Fields for given list of fieldNames to list for select
     * @param {string[]} fieldNames
     *
     * @return SelectBuilder
     */
    addFields(fieldNames: string[]): SelectBuilder;
    /**
     * Add Average for given fieldName to list for select
     * @param {string} fieldName
     *
     * @return SelectBuilder
     */
    addAverage(fieldName: string): SelectBuilder;
    /**
     * Add Count for given fieldName to list for select
     * @param {string} fieldName
     *
     * @return SelectBuilder
     */
    addCount(fieldName: string): SelectBuilder;
    /**
     * Add Minimum for given fieldName to list for select
     * @param {string} fieldName
     *
     * @return SelectBuilder
     */
    addMinimum(fieldName: string): SelectBuilder;
    /**
     * Add Maximum for given fieldName to list for select
     * @param {string} fieldName
     *
     * @return SelectBuilder
     */
    addMaximum(fieldName: string): SelectBuilder;
    /**
     * Add Sum for given fieldName to list for select
     * @param {string} fieldName
     *
     * @return SelectBuilder
     */
    addSum(fieldName: string): SelectBuilder;
    get selects(): ISelect[];
}
