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
import IaXmlWriter from "../../Xml/IaXmlWriter";
import IXmlObject from "../../Xml/IXmlObject";
export default abstract class AbstractExpenseReportLine implements IXmlObject {
    expenseType: string;
    glAccountNumber: string;
    reimbursementAmount: number;
    paymentTypeName: string;
    form1099: boolean;
    paidTo: string;
    paidFor: string;
    expenseDate: Date;
    quantity: number;
    unitRate: number;
    transactionCurrency: string;
    transactionAmount: number;
    exchangeRateDate: Date;
    exchangeRateValue: number;
    exchangeRateType: string;
    billable: boolean;
    departmentId: string;
    locationId: string;
    projectId: string;
    customerId: string;
    vendorId: string;
    employeeId: string;
    itemId: string;
    classId: string;
    contractId: string;
    warehouseId: string;
    customFields: Array<[string, any]>;
    abstract writeXml(xml: IaXmlWriter): void;
}
