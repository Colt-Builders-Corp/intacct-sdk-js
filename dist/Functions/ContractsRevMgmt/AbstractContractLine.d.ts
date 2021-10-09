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
export default abstract class AbstractContractLine extends AbstractFunction {
    recordNo: number;
    contractId: string;
    itemId: string;
    beginDate: Date;
    endDate: Date;
    itemDescription: string;
    renewal: boolean;
    exchangeRateDate: Date;
    exchangeRateValue: number;
    billingMethod: string;
    fixedPriceFrequency: string;
    billingTemplate: string;
    billingStartDate: Date;
    billingEndDate: Date;
    fixedPriceQuantity: number;
    fixedPriceRate: number;
    fixedPriceMultiplier: number;
    fixedPriceDiscountPercent: number;
    flatFixedAmount: number;
    revenue1Template: string;
    revenue1StartDate: Date;
    revenue1EndDate: Date;
    revenue2Template: string;
    revenue2StartDate: Date;
    revenue2EndDate: Date;
    shipToContactName: string;
    locationId: string;
    departmentId: string;
    projectId: string;
    vendorId: string;
    employeeId: string;
    classId: string;
    customFields: Array<[string, any]>;
}
