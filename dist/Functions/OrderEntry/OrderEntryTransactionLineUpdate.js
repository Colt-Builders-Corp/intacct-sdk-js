"use strict";
/**
 * @module Intacct/SDK/Functions/OrderEntry
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractOrderEntryTransactionLine_1 = require("./AbstractOrderEntryTransactionLine");
class OrderEntryTransactionLineUpdate extends AbstractOrderEntryTransactionLine_1.default {
    writeXml(xml) {
        xml.writeStartElement("updatesotransitem");
        xml.writeAttribute("line_num", this.lineNo, true);
        xml.writeElement("bundlenumber", this.bundleNumber);
        xml.writeElement("itemid", this.itemId, true);
        xml.writeElement("itemdesc", this.itemDescription);
        xml.writeElement("taxable", this.taxable);
        xml.writeElement("warehouseid", this.warehouseId);
        xml.writeElement("quantity", this.quantity, true);
        xml.writeElement("unit", this.unit);
        xml.writeElement("discountpercent", this.discountPercent);
        xml.writeElement("price", this.price);
        xml.writeElement("discsurchargememo", this.discountSurchargeMemo);
        xml.writeElement("locationid", this.locationId);
        xml.writeElement("departmentid", this.departmentId);
        xml.writeElement("memo", this.memo);
        if (this.itemDetails != null && this.itemDetails.length > 0) {
            xml.writeStartElement("itemdetails");
            for (const itemDetail of this.itemDetails) {
                itemDetail.writeXml(xml);
            }
            xml.writeEndElement(); // itemdetails
        }
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeElement("revrectemplate", this.revRecTemplate);
        if (this.revRecStartDate != null) {
            xml.writeStartElement("revrecstartdate");
            xml.writeDateSplitElements(this.revRecStartDate);
            xml.writeEndElement(); // revrecstartdate
        }
        if (this.revRecEndDate != null) {
            xml.writeStartElement("revrecenddate");
            xml.writeDateSplitElements(this.revRecEndDate);
            xml.writeEndElement(); // revrecenddate
        }
        xml.writeElement("renewalmacro", this.renewalMacro);
        xml.writeElement("projectid", this.projectId);
        xml.writeElement("customerid", this.customerId);
        xml.writeElement("vendorid", this.vendorId);
        xml.writeElement("employeeid", this.employeeId);
        xml.writeElement("classid", this.classId);
        xml.writeElement("contractid", this.contractId);
        xml.writeElement("fulfillmentstatus", this.fulfillmentStatus);
        xml.writeElement("taskno", this.taskNumber);
        xml.writeElement("billingtemplate", this.billingTemplate);
        xml.writeEndElement(); // updatesotransitem
    }
}
exports.default = OrderEntryTransactionLineUpdate;
//# sourceMappingURL=OrderEntryTransactionLineUpdate.js.map