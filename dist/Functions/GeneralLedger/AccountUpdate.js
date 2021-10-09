"use strict";
/**
 * @module Intacct/SDK/Functions/GeneralLedger
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractAccount_1 = require("./AbstractAccount");
class AccountUpdate extends AbstractAccount_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("update");
        xml.writeStartElement("GLACCOUNT");
        xml.writeElement("ACCOUNTNO", this.accountNo, true);
        xml.writeElement("TITLE", this.title);
        xml.writeElement("ACCOUNTTYPE", this.accountType);
        xml.writeElement("NORMALBALANCE", this.normalBalance);
        xml.writeElement("CLOSINGTYPE", this.closingType);
        xml.writeElement("CLOSINGACCOUNTNO", this.closeIntoGlAccountNo);
        xml.writeElement("CATEGORY", this.systemCategory);
        xml.writeElement("TAXCODE", this.taxReturnCode);
        xml.writeElement("MRCCODE", this.m3ReturnCode);
        if (this.active === true) {
            xml.writeElement("STATUS", "active");
        }
        else if (this.active === false) {
            xml.writeElement("STATUS", "inactive");
        }
        xml.writeElement("TAXABLE", this.taxable);
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
        xml.writeEndElement(); // GLACCOUNT
        xml.writeEndElement(); // update
        xml.writeEndElement(); // function
    }
}
exports.default = AccountUpdate;
//# sourceMappingURL=AccountUpdate.js.map