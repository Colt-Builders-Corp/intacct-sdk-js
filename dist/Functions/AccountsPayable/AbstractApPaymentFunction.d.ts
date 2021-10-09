/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
import IaXmlWriter from "../../Xml/IaXmlWriter";
import AbstractFunction from "../AbstractFunction";
export default abstract class AbstractApPaymentFunction extends AbstractFunction {
    static readonly DELETE = "delete";
    static readonly DECLINE = "decline_appaymentrequest";
    static readonly CONFIRM = "confirm_appaymentrequest";
    static readonly APPROVE = "approve_appaymentrequest";
    static readonly SEND = "send_appaymentrequest";
    static readonly VOID = "void_appaymentrequest";
    private recordNo;
    constructor(recordNo: number, controlId?: string);
    writeXml(xml: IaXmlWriter): void;
    protected abstract getFunction(): string;
    private writeCrudXml;
    private writeLegacyXml;
}
