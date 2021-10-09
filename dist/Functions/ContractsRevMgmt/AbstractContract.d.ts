/**
 * @module Intacct/SDK/Functions/ContractsRevMgmt
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
export default abstract class AbstractContract extends AbstractFunction {
    recordNo: number;
    contractId: string;
    customerId: string;
    contractName: string;
    billToContactName: string;
    description: string;
    shipToContactName: string;
    beginDate: Date;
    endDate: Date;
    billingFrequency: string;
    paymentTerm: string;
    billingPriceList: string;
    fairValuePriceList: string;
    attachmentsId: string;
    locationId: string;
    departmentId: string;
    projectId: string;
    vendorId: string;
    employeeId: string;
    classId: string;
    transactionCurrency: string;
    exchangeRateType: string;
    renewal: boolean;
    renewalTemplate: string;
    renewalTermLength: string;
    renewalTermPeriod: string;
    customFields: Array<[string, any]>;
}
