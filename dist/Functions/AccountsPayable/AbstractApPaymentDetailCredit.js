"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractApPaymentDetailCredit {
    writeXml(xml) {
        xml.writeElement(this.getKeyType(), this.recordNo, true);
        xml.writeElement(this.getEntryKeyType(), this.lineRecordNo);
        xml.writeElement(this.getTransactionType(), this.transactionAmount);
    }
}
exports.default = AbstractApPaymentDetailCredit;
AbstractApPaymentDetailCredit.DEBIT_MEMO = "debit memo";
AbstractApPaymentDetailCredit.NEGATIVE_BILL = "negative bill";
AbstractApPaymentDetailCredit.ADVANCE = "advance";
//# sourceMappingURL=AbstractApPaymentDetailCredit.js.map