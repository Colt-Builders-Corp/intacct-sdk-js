/**
 * @module Intacct/SDK/Functions/CashManagement
 */
/**
 * Copyright 2020 Sage Intacct, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "LICENSE" file accompanying this file. This file is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import IaXmlWriter from "../../Xml/IaXmlWriter";
import AbstractFunction from "../AbstractFunction";
import AbstractOtherReceiptLine from "./AbstractOtherReceiptLine";
export default abstract class AbstractOtherReceipt extends AbstractFunction {
    receiptDate: Date;
    payer: string;
    paymentMethod: string;
    transactionDate: Date;
    transactionNo: string;
    description: string;
    attachmentsId: string;
    bankAccountId: string;
    depositDate: Date;
    undepositedFundsGlAccountNo: string;
    transactionCurrency: string;
    exchangeRateDate: Date;
    exchangeRateValue: number;
    exchangeRateType: string;
    lines: AbstractOtherReceiptLine[];
    customFields: Array<[string, any]>;
    abstract writeXml(xml: IaXmlWriter): void;
}
