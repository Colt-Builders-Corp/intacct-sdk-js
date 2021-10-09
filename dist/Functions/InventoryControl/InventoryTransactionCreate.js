"use strict";
/**
 * @module Intacct/SDK/Functions/InventoryControl
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractInventoryTransaction_1 = require("./AbstractInventoryTransaction");
class InventoryTransactionCreate extends AbstractInventoryTransaction_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_ictransaction");
        xml.writeElement("transactiontype", this.transactionDefinition, true);
        xml.writeStartElement("datecreated");
        xml.writeDateSplitElements(this.transactionDate, true);
        xml.writeEndElement(); // datecreated
        xml.writeElement("createdfrom", this.createdFrom);
        xml.writeElement("documentno", this.documentNumber);
        xml.writeElement("referenceno", this.referenceNumber);
        xml.writeElement("message", this.message);
        xml.writeElement("externalid", this.externalId);
        xml.writeElement("basecurr", this.baseCurrency);
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeElement("state", this.state);
        xml.writeStartElement("ictransitems");
        if (this.lines != null && this.lines.length > 0) {
            for (const line of this.lines) {
                line.writeXml(xml);
            }
        }
        xml.writeEndElement(); // ictransitems
        if (this.subtotals != null && this.subtotals.length > 0) {
            xml.writeStartElement("subtotals");
            for (const subtotal of this.subtotals) {
                subtotal.writeXml(xml);
            }
            xml.writeEndElement(); // subtotals
        }
        xml.writeEndElement(); // create_ictransaction
        xml.writeEndElement(); // function
    }
}
exports.default = InventoryTransactionCreate;
//# sourceMappingURL=InventoryTransactionCreate.js.map