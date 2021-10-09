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
import IaXmlWriter from "../../Xml/IaXmlWriter";
import IXmlObject from "../../Xml/IXmlObject";
import AbstractFunction from "../AbstractFunction";
export default abstract class AbstractTimesheetEntry extends AbstractFunction implements IXmlObject {
    lineRecordNo: number;
    entryDate: Date;
    quantity: number;
    description: string;
    notes: string;
    taskRecordNo: number;
    timeTypeName: string;
    billable: boolean;
    overrideBillingRate: number;
    overrideLaborCostRate: number;
    departmentId: string;
    locationId: string;
    projectId: string;
    customerId: string;
    vendorId: string;
    itemId: string;
    classId: string;
    contractId: string;
    warehouseId: string;
    customFields: Array<[string, any]>;
    abstract writeXml(xml: IaXmlWriter): void;
}
