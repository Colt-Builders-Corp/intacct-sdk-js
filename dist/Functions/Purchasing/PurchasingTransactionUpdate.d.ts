/**
 * @module Intacct/SDK/Functions/Purchasing
 */
import IaXmlWriter from "../../Xml/IaXmlWriter";
import AbstractPurchasingTransaction from "./AbstractPurchasingTransaction";
export default class PurchasingTransactionUpdate extends AbstractPurchasingTransaction {
    writeXml(xml: IaXmlWriter): void;
}
