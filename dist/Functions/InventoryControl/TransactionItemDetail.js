"use strict";
/**
 * @module Intacct/SDK/Functions/InventoryControl
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractTransactionItemDetail_1 = require("./AbstractTransactionItemDetail");
class TransactionItemDetail extends AbstractTransactionItemDetail_1.default {
    writeXml(xml) {
        xml.writeStartElement("itemdetail");
        xml.writeElement("quantity", this.quantity);
        if (this.serialNumber != null) {
            xml.writeElement("serialno", this.serialNumber);
        }
        if (this.lotNumber != null) {
            xml.writeElement("lotno", this.lotNumber);
        }
        xml.writeElement("aisle", this.aisle);
        xml.writeElement("row", this.row);
        xml.writeElement("bin", this.bin);
        if (this.itemExpiration != null) {
            xml.writeStartElement("itemexpiration");
            xml.writeDateSplitElements(this.itemExpiration);
            xml.writeEndElement(); // itemexpiration
        }
        xml.writeEndElement(); // itemdetail
    }
}
exports.default = TransactionItemDetail;
//# sourceMappingURL=TransactionItemDetail.js.map