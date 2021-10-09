/**
 * @module Intacct/SDK/Functions/GeneralLedger
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
import CustomAllocationSplit from "../Company/CustomAllocationSplit";
export default abstract class AbstractGlEntry implements IXmlObject {
    static readonly CUSTOM_ALLOCATION_ID = "Custom";
    documentNumber: string;
    allocationId: string;
    memo: string;
    departmentId: string;
    locationId: string;
    projectId: string;
    taskId: string;
    customerId: string;
    vendorId: string;
    employeeId: string;
    itemId: string;
    classId: string;
    contractId: string;
    warehouseId: string;
    customAllocationSplits: CustomAllocationSplit[];
    customFields: Array<[string, any]>;
    abstract writeXml(xml: IaXmlWriter): void;
}
