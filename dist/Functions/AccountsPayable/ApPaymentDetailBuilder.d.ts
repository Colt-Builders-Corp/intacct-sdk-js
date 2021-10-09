/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
import ApPaymentDetailBillInfo from "./ApPaymentDetailBillInfo";
import ApPaymentDetailInfo from "./ApPaymentDetailInfo";
import IApPaymentDetail from "./IApPaymentDetail";
export default class ApPaymentDetailBuilder {
    private readonly detailList;
    constructor();
    addApPaymentDetailBill(info: ApPaymentDetailBillInfo): ApPaymentDetailBuilder;
    addApPaymentDetailCreditMemo(info: ApPaymentDetailInfo): ApPaymentDetailBuilder;
    getApPaymentDetailList(): IApPaymentDetail[];
}
