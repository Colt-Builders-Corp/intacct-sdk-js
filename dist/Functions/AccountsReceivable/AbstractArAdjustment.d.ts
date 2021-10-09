/**
 * @module Intacct/SDK/Functions/AccountsReceivable
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
import AbstractArAdjustmentLine from "./AbstractArAdjustmentLine";
export default abstract class AbstractArAdjustment extends AbstractFunction {
    recordNo: number;
    customerId: string;
    transactionDate: Date;
    glPostingDate: Date;
    action: string;
    summaryRecordNo: number;
    invoiceNumber: string;
    description: string;
    externalId: string;
    baseCurrency: string;
    transactionCurrency: string;
    exchangeRateDate: Date;
    exchangeRateValue: number;
    exchangeRateType: string;
    doNotPostToGl: boolean;
    adjustmentNumber: string;
    lines: AbstractArAdjustmentLine[];
    customFields: Array<[string, any]>;
    protected writeXmlMultiCurrencySection(xml: IaXmlWriter): void;
}
