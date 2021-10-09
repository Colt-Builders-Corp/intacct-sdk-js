/**
 * @module Intacct/SDK/Functions/Projects
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
export default abstract class AbstractProject extends AbstractFunction {
    projectId: string;
    projectName: string;
    projectCategory: string;
    description: string;
    parentProjectId: string;
    invoiceWithParent: boolean;
    projectType: string;
    projectStatus: string;
    customerId: string;
    projectManagerEmployeeId: string;
    externalUserId: string;
    salesContactEmployeeId: string;
    referenceNo: string;
    userRestrictions: string;
    transactionRules: string[];
    active: boolean;
    primaryContactName: string;
    billToContactName: string;
    shipToContactName: string;
    paymentTerms: string;
    billingType: string;
    beginDate: Date;
    endDate: Date;
    departmentId: string;
    locationId: string;
    classId: string;
    attachmentsId: string;
    billableEmployeeExpense: boolean;
    billableApPurchasing: boolean;
    currency: string;
    salesOrderNo: string;
    purchaseOrderNo: string;
    purchaseOrderAmount: string;
    purchaseQuoteNo: string;
    contractAmount: string;
    laborPricingOption: string;
    laborPricingDefaultRate: string;
    expensePricingOption: string;
    expensePricingDefaultRate: string;
    apPurchasingPricingOption: string;
    apPurchasingPricingDefaultRate: string;
    budgetedBillingAmount: string;
    budgetedCost: string;
    budgetedDuration: string;
    glBudgetId: string;
    invoiceMessage: string;
    invoiceCurrency: string;
    customFields: Array<[string, any]>;
}
