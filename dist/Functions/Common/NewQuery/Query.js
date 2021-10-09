"use strict";
/**
 * @module Intacct/SDK/Functions/Common/NewQuery
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../../AbstractFunction");
class Query extends AbstractFunction_1.default {
    /**
     * Add Field list for this query
     * @param {ISelect[]} selectFields
     *
     * @return IQueryFunction
     */
    assignSelectFields(selectFields) {
        this.selectFields = selectFields;
        return this;
    }
    /**
     * Add object name for given fromObject for this query
     * @param {string} fromObject
     *
     * @return IQueryFunction
     */
    assignFromObject(fromObject) {
        this.fromObject = fromObject;
        return this;
    }
    /**
     * Add docParId for this query
     * @param {string} docParId
     *
     * @return IQueryFunction
     */
    assignDocParId(docParId) {
        this.docParId = docParId;
        return this;
    }
    /**
     * Add Filter for this query
     * @param filter
     */
    assignFilter(filter) {
        this.filter = filter;
        return this;
    }
    /**
     * Add Order by list for this query
     * @param {IOrder[]} orderBy
     *
     * @return IOrder[]
     */
    assignOrderBy(orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    /**
     * Add case insensitive for this query
     * @param {boolean} caseInsensitive
     *
     * @return IQueryFunction
     */
    assignCaseInsensitive(caseInsensitive) {
        this.caseInsensitive = caseInsensitive;
        return this;
    }
    /**
     * Add show private for this query
     * @param showPrivate
     *
     * @return IQueryFunction
     */
    assignShowPrivate(showPrivate) {
        this.showPrivate = showPrivate;
        return this;
    }
    /**
     * Add page size for this query
     * @param {number} pageSize
     *
     * @return IQueryFunction
     */
    assignPageSize(pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    /**
     * Add offset for this query
     * @param {number} offset
     *
     * @return IQueryFunction
     */
    assignOffset(offset) {
        this.offset = offset;
        return this;
    }
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("query");
        if (this.selectFields != null && this.selectFields.length > 0) {
            xml.writeStartElement("select");
            for (const select of this.selectFields) {
                select.writeXml(xml);
            }
            xml.writeEndElement(); // select
        }
        xml.writeElement("object", this.fromObject, false);
        xml.writeElement("docparid", this.docParId);
        if (this.filter) {
            xml.writeStartElement("filter");
            this.filter.writeXml(xml);
            xml.writeEndElement(); // filter
        }
        if (this.orderBy != null && this.orderBy.length > 0) {
            xml.writeStartElement("orderby");
            for (const order of this.orderBy) {
                order.writeXml(xml);
            }
            xml.writeEndElement(); // orderby
        }
        xml.writeStartElement("options");
        xml.writeElement("caseinsensitive", this.caseInsensitive == null ? false : this.caseInsensitive, false);
        xml.writeElement("showprivate", this.showPrivate == null ? false : this.showPrivate, false);
        xml.writeEndElement(); // options
        xml.writeElement("pagesize", this.pageSize);
        xml.writeElement("offset", this.offset);
        xml.writeEndElement(); // query
        xml.writeEndElement(); // function
    }
}
exports.default = Query;
//# sourceMappingURL=Query.js.map