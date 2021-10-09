/**
 * @module Intacct/SDK/Functions/AccountsReceivable
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
import AbstractFunction from "../AbstractFunction";
export default abstract class AbstractCustomer extends AbstractFunction {
    customerId: string;
    customerName: string;
    oneTime: boolean;
    active: boolean;
    lastName: string;
    firstName: string;
    middleName: string;
    prefix: string;
    companyName: string;
    printAs: string;
    primaryPhoneNo: string;
    secondaryPhoneNo: string;
    cellularPhoneNo: string;
    pagerNo: string;
    faxNo: string;
    primaryEmailAddress: string;
    secondaryEmailAddress: string;
    primaryUrl: string;
    secondaryUrl: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    stateProvince: string;
    zipPostalCode: string;
    country: string;
    isoCountryCode: string;
    excludedFromContactList: boolean;
    customerTypeId: string;
    salesRepEmployeeId: string;
    parentCustomerId: string;
    glGroupName: string;
    territoryId: string;
    attachmentsId: string;
    paymentTerm: string;
    offsetArGlAccountNo: string;
    defaultRevenueGlAccountNo: string;
    shippingMethod: string;
    resaleNumber: string;
    taxable: boolean;
    contactTaxGroupName: string;
    taxId: string;
    creditLimit: number;
    onHold: boolean;
    deliveryMethod: string;
    defaultInvoiceMessage: string;
    comments: string;
    defaultCurrency: string;
    printOptionArInvoiceTemplateName: string;
    printOptionOeQuoteTemplateName: string;
    printOptionOeOrderTemplateName: string;
    printOptionOeListTemplateName: string;
    printOptionOeInvoiceTemplateName: string;
    printOptionOeAdjustmentTemplateName: string;
    printOptionOeOtherTemplateName: string;
    primaryContactName: string;
    billToContactName: string;
    shipToContactName: string;
    restrictionType: string;
    restrictedLocations: string[];
    restrictedDepartments: string[];
    customFields: Array<[string, any]>;
    protected writeXmlMailAddress(xml: IaXmlWriter): void;
}
