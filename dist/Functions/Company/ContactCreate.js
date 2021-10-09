"use strict";
/**
 * @module Intacct/SDK/Functions/Company
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractContact_1 = require("./AbstractContact");
class ContactCreate extends AbstractContact_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create");
        xml.writeStartElement("CONTACT");
        xml.writeElement("CONTACTNAME", this.contactName, true);
        xml.writeElement("PRINTAS", this.printAs, true);
        xml.writeElement("COMPANYNAME", this.companyName);
        xml.writeElement("TAXABLE", this.taxable);
        xml.writeElement("TAXID", this.taxId);
        xml.writeElement("TAXGROUP", this.contactTaxGroupName);
        xml.writeElement("PREFIX", this.prefix);
        xml.writeElement("FIRSTNAME", this.firstName);
        xml.writeElement("LASTNAME", this.lastName);
        xml.writeElement("INITIAL", this.middleName);
        xml.writeElement("PHONE1", this.primaryPhoneNo);
        xml.writeElement("PHONE2", this.secondaryPhoneNo);
        xml.writeElement("CELLPHONE", this.cellularPhoneNo);
        xml.writeElement("PAGER", this.pagerNo);
        xml.writeElement("FAX", this.faxNo);
        xml.writeElement("EMAIL1", this.primaryEmailAddress);
        xml.writeElement("EMAIL2", this.secondaryEmailAddress);
        xml.writeElement("URL1", this.primaryUrl);
        xml.writeElement("URL2", this.secondaryUrl);
        if (this.active === true) {
            xml.writeElement("STATUS", "active");
        }
        else if (this.active === false) {
            xml.writeElement("STATUS", "inactive");
        }
        this.writeXmlMailAddress(xml);
        xml.writeEndElement(); // CONTACT
        xml.writeEndElement(); // create
        xml.writeEndElement(); // function
    }
}
exports.default = ContactCreate;
//# sourceMappingURL=ContactCreate.js.map