"use strict";
/**
 * @module Intacct/SDK/Functions/Common/NewQuery/QueryOrderBy
 */
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractOrderDirection {
    constructor(fieldName) {
        this.fieldName = fieldName;
    }
    writeXml(xml) {
        xml.writeStartElement("order");
        xml.writeElement("field", this.fieldName, false);
        xml.writeElement(this.getDirection(), null, true);
        xml.writeEndElement(); // order
    }
}
exports.default = AbstractOrderDirection;
AbstractOrderDirection.ASCENDING = "ascending";
AbstractOrderDirection.DESCENDING = "descending";
//# sourceMappingURL=AbstractOrderDirection.js.map