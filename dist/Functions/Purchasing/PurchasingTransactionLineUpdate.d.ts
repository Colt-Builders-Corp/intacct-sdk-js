/**
 * @module Intacct/SDK/Functions/Purchasing
 */
import IaXmlWriter from "../../Xml/IaXmlWriter";
import AbstractPurchasingTransactionLine from "./AbstractPurchasingTransactionLine";
export default class PurchasingTransactionLineUpdate extends AbstractPurchasingTransactionLine {
    lineNo: number;
    writeXml(xml: IaXmlWriter): void;
}
