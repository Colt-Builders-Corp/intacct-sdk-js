/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
import AbstractApPaymentFunction from "./AbstractApPaymentFunction";
export default class ApPaymentFactory {
    static create(type: string, recordno: number, controlId: string): AbstractApPaymentFunction;
}
