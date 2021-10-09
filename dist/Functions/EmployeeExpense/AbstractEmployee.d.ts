/**
 * @module Intacct/SDK/Functions/EmployeeExpense
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
export default abstract class AbstractEmployee extends AbstractFunction {
    employeeId: string;
    contactName: string;
    startDate: Date;
    title: string;
    ssn: string;
    employeeType: string;
    active: boolean;
    placeholderResource: boolean;
    birthDate: Date;
    endDate: Date;
    terminationType: string;
    managerEmployeeId: string;
    gender: string;
    departmentId: string;
    locationId: string;
    classId: string;
    defaultCurrency: string;
    earningTypeName: string;
    postActualCost: boolean;
    form1099Name: string;
    form1099Type: string;
    form1099Box: string;
    attachmentFolderName: string;
    preferredPaymentMethod: string;
    sendAutomaticPaymentNotification: boolean;
    mergePaymentRequests: boolean;
    achEnabled: boolean;
    achBankRoutingNo: string;
    achBankAccountNo: string;
    achBankAccountType: string;
    achBankAccountClass: string;
    customFields: Array<[string, any]>;
}
