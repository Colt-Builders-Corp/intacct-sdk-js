/**
 * @module Intacct/SDK/Functions/InventoryControl
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
export default abstract class AbstractItem extends AbstractFunction {
    itemId: string;
    active: boolean;
    itemName: string;
    produceLineId: string;
    costMethod: string;
    extendedDescription: string;
    salesDescription: string;
    purchasingDescription: string;
    unitOfMeasure: string;
    note: string;
    expenseGlAccountNo: string;
    arGlAccountNo: string;
    apGlAccountNo: string;
    inventoryGlAccountNo: string;
    shippingWeight: string;
    itemGlGroupName: string;
    standardCost: string;
    cogsGlAccountNo: string;
    basePrice: string;
    revenueGlAccountNo: string;
    taxable: boolean;
    itemTaxGroupName: string;
    deferredRevGlAccountNo: string;
    defaultRevRecTemplateId: string;
    vsoeCategory: string;
    vsoeDefaultDeliveryStatus: string;
    vsoeDefaultDeferralStatus: string;
    kitRevenuePosting: string;
    kitPrintFormat: string;
    substituteItemId: string;
    serialTrackingEnabled: boolean;
    serialNumberMask: string;
    lotTrackingEnabled: boolean;
    lotCategory: string;
    binTrackingEnabled: boolean;
    expTrackingEnabled: boolean;
    upc: string;
    unitCostPrecisionInventory: number;
    unitCostPrecisionSales: number;
    unitCostPrecisionPurchasing: number;
    itemStartEndDateEnabled: boolean;
    periodsMeasuredIn: string;
    numberOfPeriods: number;
    proratePriceAllowed: boolean;
    defaultRenewalMacroId: string;
    customFields: Array<[string, any]>;
}
