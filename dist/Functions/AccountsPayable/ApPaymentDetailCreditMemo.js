"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ApPaymentDetailCreditMemo {
    constructor(info) {
        this.info = info;
    }
    writeXml(xml) {
        xml.writeStartElement("APPYMTDETAIL");
        xml.writeElement("POSADJKEY", this.info.recordNo, true);
        xml.writeElement("POSADJENTRYKEY", this.info.lineRecordNo);
        if (this.info.detailTransaction != null) {
            this.info.detailTransaction.writeXml(xml);
        }
        xml.writeElement("TRX_PAYMENTAMOUNT", this.info.paymentAmount);
        xml.writeEndElement(); // APPYMTDETAIL
    }
}
exports.default = ApPaymentDetailCreditMemo;
//# sourceMappingURL=ApPaymentDetailCreditMemo.js.map