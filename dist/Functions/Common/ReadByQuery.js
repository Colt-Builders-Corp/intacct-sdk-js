"use strict";
/**
 * @module Intacct/SDK/Functions/Common
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../AbstractFunction");
class ReadByQuery extends AbstractFunction_1.default {
    constructor(controlId) {
        super(controlId);
        this._pageSize = 1000;
        this.fields = [];
        this.pageSize = ReadByQuery.DEFAULT_PAGE_SIZE;
    }
    get pageSize() {
        return this._pageSize;
    }
    set pageSize(pageSize) {
        if (pageSize < ReadByQuery.MIN_PAGE_SIZE) {
            throw new Error("Page Size cannot be less than " + ReadByQuery.MIN_PAGE_SIZE);
        }
        else if (pageSize > ReadByQuery.MAX_PAGE_SIZE) {
            throw new Error("Page Size cannot be greater than " + ReadByQuery.MAX_PAGE_SIZE);
        }
        this._pageSize = pageSize;
    }
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("readByQuery");
        xml.writeElement("object", this.objectName, true);
        xml.writeElement("query", this.query == null ? "" : this.query.toString(), true);
        xml.writeElement("fields", this.fields.length > 0 ? this.fields.join(",") : "*", true);
        xml.writeElement("pagesize", this.pageSize);
        xml.writeElement("returnFormat", "xml");
        xml.writeElement("docparid", this.docParId);
        xml.writeEndElement(); // readByQuery
        xml.writeEndElement(); // function
    }
}
exports.default = ReadByQuery;
ReadByQuery.MIN_PAGE_SIZE = 1;
ReadByQuery.MAX_PAGE_SIZE = 1000;
ReadByQuery.DEFAULT_PAGE_SIZE = 1000;
//# sourceMappingURL=ReadByQuery.js.map