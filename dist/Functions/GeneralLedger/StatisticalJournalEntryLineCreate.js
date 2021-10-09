"use strict";
/**
 * @module Intacct/SDK/Functions/GeneralLedger
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractStatisticalJournalEntryLine_1 = require("./AbstractStatisticalJournalEntryLine");
class StatisticalJournalEntryLineCreate extends AbstractStatisticalJournalEntryLine_1.default {
    writeXml(xml) {
        xml.writeStartElement("GLENTRY");
        xml.writeElement("DOCUMENT", this.documentNumber);
        xml.writeElement("ACCOUNTNO", this.statAccountNumber, true);
        if (this.amount < 0) {
            xml.writeElement("TR_TYPE", "-1"); // Decrease
            xml.writeElement("TRX_AMOUNT", Math.abs(this.amount), true);
        }
        else {
            xml.writeElement("TR_TYPE", "1"); // Increase
            xml.writeElement("TRX_AMOUNT", this.amount, true);
        }
        if (this.allocationId != null) {
            xml.writeElement("ALLOCATION", this.allocationId);
            if (this.allocationId === StatisticalJournalEntryLineCreate.CUSTOM_ALLOCATION_ID) {
                for (const split of this.customAllocationSplits) {
                    split.writeXml(xml);
                }
            }
        }
        else {
            xml.writeElement("LOCATION", this.locationId);
            xml.writeElement("DEPARTMENT", this.departmentId);
            xml.writeElement("PROJECTID", this.projectId);
            xml.writeElement("CUSTOMERID", this.customerId);
            xml.writeElement("VENDORID", this.vendorId);
            xml.writeElement("EMPLOYEEID", this.employeeId);
            xml.writeElement("ITEMID", this.itemId);
            xml.writeElement("CLASSID", this.classId);
            xml.writeElement("CONTRACTID", this.contractId);
            xml.writeElement("WAREHOUSEID", this.warehouseId);
        }
        xml.writeElement("DESCRIPTION", this.memo);
        xml.writeCustomFieldsImplicit(this.customFields);
        xml.writeEndElement(); // GLENTRY
    }
}
exports.default = StatisticalJournalEntryLineCreate;
//# sourceMappingURL=StatisticalJournalEntryLineCreate.js.map