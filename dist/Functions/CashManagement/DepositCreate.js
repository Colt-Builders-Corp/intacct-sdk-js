"use strict";
/**
 * @module Intacct/SDK/Functions/CashManagement
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractDeposit_1 = require("./AbstractDeposit");
class DepositCreate extends AbstractDeposit_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("record_deposit");
        xml.writeElement("bankaccountid", this.bankAccountId, true);
        xml.writeStartElement("depositdate");
        xml.writeDateSplitElements(this.depositDate);
        xml.writeEndElement(); // depositdate
        xml.writeElement("depositid", this.depositSlipId, true);
        xml.writeStartElement("receiptkeys");
        if (this.transactionKeysToDeposit != null && this.transactionKeysToDeposit.length > 0) {
            for (const key of this.transactionKeysToDeposit) {
                xml.writeElement("receiptkey", key, true);
            }
        }
        xml.writeEndElement(); // receiptkeys
        xml.writeElement("description", this.description);
        xml.writeElement("supdocid", this.attachmentsId);
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeEndElement(); // record_deposit
        xml.writeEndElement(); // function
    }
}
exports.default = DepositCreate;
//# sourceMappingURL=DepositCreate.js.map