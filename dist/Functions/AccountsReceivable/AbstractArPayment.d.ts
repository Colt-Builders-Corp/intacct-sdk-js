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
import AbstractFunction from "../AbstractFunction";
import ArPaymentItem from "./ArPaymentItem";
export default abstract class AbstractArPayment extends AbstractFunction {
    recordNo: number;
    paymentMethod: string;
    bankAccountId: string;
    undepositedFundsGlAccountNo: string;
    summaryRecordNo: number;
    transactionCurrency: string;
    baseCurrency: string;
    customerId: string;
    receivedDate: Date;
    transactionPaymentAmount: number;
    basePaymentAmount: number;
    exchangeRateDate: Date;
    exchangeRateValue: number;
    exchangeRateType: string;
    creditCardType: string;
    authorizationCode: string;
    overpaymentLocationId: string;
    overpaymentDepartmentId: string;
    referenceNumber: string;
    applyToTransactions: ArPaymentItem[];
}
