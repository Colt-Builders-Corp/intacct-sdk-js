"use strict";
/**
 * @module Intacct/SDK/Functions/GeneralLedger
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractStatisticalAccount_1 = require("./AbstractStatisticalAccount");
class StatisticalAccountDelete extends AbstractStatisticalAccount_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_statglaccount");
        xml.writeAttribute("glaccountno", this.accountNo, true);
        xml.writeEndElement(); // delete_statglaccount
        xml.writeEndElement(); // function
    }
}
exports.default = StatisticalAccountDelete;
//# sourceMappingURL=StatisticalAccountDelete.js.map