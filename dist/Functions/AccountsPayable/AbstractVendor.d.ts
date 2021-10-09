/**
 * @module Intacct/SDK/Functions/AccountsPayable
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
export default abstract class AbstractVendor extends AbstractFunction {
    vendorId: string;
    vendorName: string;
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
    vendorTypeId: string;
    parentVendorId: string;
    glGroupName: string;
    taxId: string;
    form1099Name: string;
    form1099Type: string;
    form1099Box: string;
    attachmentsId: string;
    defaultExpenseGlAccountNo: string;
    taxable: boolean;
    contactTaxGroupName: string;
    creditLimit: number;
    onHold: boolean;
    doNotPay: boolean;
    comments: string;
    defaultCurrency: string;
    primaryContactName: string;
    payToContactName: string;
    returnToContactName: string;
    preferredPaymentMethod: string;
    sendAutomaticPaymentNotification: boolean;
    mergePaymentRequests: boolean;
    vendorBillingType: string;
    paymentPriority: string;
    paymentTerm: string;
    termDiscountDisplayedOnCheckStub: boolean;
    achEnabled: boolean;
    achBankRoutingNo: string;
    achBankAccountNo: string;
    achBankAccountType: string;
    achBankAccountClass: string;
    vendorAccountNo: string;
    locationAssignedAccountNoDisplayedOnCheckStub: boolean;
    restrictionType: string;
    restrictedLocations: string[];
    restrictedDepartments: string[];
    customFields: Array<[string, any]>;
    protected writeXmlMailAddress(xml: IaXmlWriter): void;
}
