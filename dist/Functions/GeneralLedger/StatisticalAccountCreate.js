"use strict";
/**
 * @module Intacct/SDK/Functions/GeneralLedger
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractStatisticalAccount_1 = require("./AbstractStatisticalAccount");
class StatisticalAccountCreate extends AbstractStatisticalAccount_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create");
        xml.writeStartElement("STATACCOUNT");
        xml.writeElement("ACCOUNTNO", this.accountNo, true);
        xml.writeElement("TITLE", this.title, true);
        xml.writeElement("ACCOUNTTYPE", this.reportType, true);
        xml.writeElement("CATEGORY", this.systemCategory);
        if (this.active === true) {
            xml.writeElement("STATUS", "active");
        }
        else if (this.active === false) {
            xml.writeElement("STATUS", "inactive");
        }
        xml.writeElement("REQUIREDEPT", this.requireDepartment);
        xml.writeElement("REQUIRELOC", this.requireLocation);
        xml.writeElement("REQUIREPROJECT", this.requireProject);
        xml.writeElement("REQUIRECUSTOMER", this.requireCustomer);
        xml.writeElement("REQUIREVENDOR", this.requireVendor);
        xml.writeElement("REQUIREEMPLOYEE", this.requireEmployee);
        xml.writeElement("REQUIREITEM", this.requireItem);
        xml.writeElement("REQUIRECLASS", this.requireClass);
        xml.writeElement("REQUIRECONTRACT", this.requireContract);
        xml.writeElement("REQUIREWAREHOUSE", this.requireWarehouse);
        xml.writeCustomFieldsImplicit(this.customFields);
        xml.writeEndElement(); // STATACCOUNT
        xml.writeEndElement(); // create
        xml.writeEndElement(); // function
    }
}
exports.default = StatisticalAccountCreate;
//# sourceMappingURL=StatisticalAccountCreate.js.map