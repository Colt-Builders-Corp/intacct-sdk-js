/**
 * @module Intacct/SDK/Functions/OrderEntry
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
import AbstractTransactionSubtotal from "../InventoryControl/AbstractTransactionSubtotal";
import AbstractOrderEntryTransactionLine from "./AbstractOrderEntryTransactionLine";
export default abstract class AbstractOrderEntryTransaction extends AbstractFunction {
    documentId: string;
    transactionDefinition: string;
    transactionDate: Date;
    glPostingDate: Date;
    createdFrom: string;
    customerId: string;
    documentNumber: string;
    originalDocumentDate: Date;
    referenceNumber: string;
    paymentTerm: string;
    dueDate: Date;
    message: string;
    shippingMethod: string;
    shipToContactName: string;
    billToContactName: string;
    attachmentsId: string;
    externalId: string;
    baseCurrency: string;
    transactionCurrency: string;
    exchangeRateDate: Date;
    exchangeRateValue: number;
    exchangeRateType: string;
    vsoePriceList: string;
    state: string;
    projectId: string;
    subtotals: AbstractTransactionSubtotal[];
    lines: AbstractOrderEntryTransactionLine[];
    customFields: Array<[string, any]>;
    protected writeXmlMultiCurrencySection(xml: IaXmlWriter): void;
}
