/**
 * @module Intacct/SDK/Functions/Purchasing
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
export default abstract class AbstractPurchasingTransactionLine implements IXmlObject {
    itemId: string;
    itemDescription: string;
    taxable: boolean;
    warehouseId: string;
    quantity: number;
    unit: string;
    price: number;
    overrideTaxAmount: number;
    tax: number;
    memo: string;
    form1099: boolean;
    billable: boolean;
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
