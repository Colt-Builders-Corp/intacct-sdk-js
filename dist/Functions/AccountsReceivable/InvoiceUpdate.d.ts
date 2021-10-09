/**
 * @module Intacct/SDK/Functions/AccountsReceivable
 */
import IaXmlWriter from "../../Xml/IaXmlWriter";
import AbstractInvoice from "./AbstractInvoice";
export default class InvoiceUpdate extends AbstractInvoice {
    writeXml(xml: IaXmlWriter): void;
    protected writeXmlMultiCurrencySection(xml: IaXmlWriter): void;
}
