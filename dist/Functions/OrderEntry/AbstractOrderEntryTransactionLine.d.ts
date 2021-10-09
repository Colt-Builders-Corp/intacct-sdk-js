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
import IXmlObject from "../../Xml/IXmlObject";
import AbstractTransactionItemDetail from "../InventoryControl/AbstractTransactionItemDetail";
export default abstract class AbstractOrderEntryTransactionLine implements IXmlObject {
    bundleNumber: string;
    itemId: string;
    itemDescription: string;
    taxable: boolean;
    warehouseId: string;
    quantity: number;
    unit: string;
    discountPercent: number;
    price: number;
    discountSurchargeMemo: string;
    memo: string;
    revRecTemplate: string;
    revRecStartDate: Date;
    revRecEndDate: Date;
    renewalMacro: string;
    fulfillmentStatus: string;
    taskNumber: string;
    billingTemplate: string;
    itemDetails: AbstractTransactionItemDetail[];
    departmentId: string;
    locationId: string;
    projectId: string;
    customerId: string;
    vendorId: string;
    employeeId: string;
    classId: string;
    contractId: string;
    customFields: Array<[string, any]>;
    abstract writeXml(xml: IaXmlWriter): void;
}
