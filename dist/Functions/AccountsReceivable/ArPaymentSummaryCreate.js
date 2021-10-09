"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsReceivable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractArPaymentSummary_1 = require("./AbstractArPaymentSummary");
class ArPaymentSummaryCreate extends AbstractArPaymentSummary_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_arpaymentbatch");
        xml.writeElement("batchtitle", this.title, true);
        if (this.undepositedFundsGlAccountNo != null) {
            xml.writeElement("undepfundsacct", this.undepositedFundsGlAccountNo);
        }
        else {
            xml.writeElement("bankaccountid", this.bankAccountId);
        }
        xml.writeStartElement("datecreated");
        xml.writeDateSplitElements(this.glPostingDate);
        xml.writeEndElement(); // datecreated
        xml.writeEndElement(); // create_arpaymentbatch
        xml.writeEndElement(); // function
    }
}
exports.default = ArPaymentSummaryCreate;
//# sourceMappingURL=ArPaymentSummaryCreate.js.map