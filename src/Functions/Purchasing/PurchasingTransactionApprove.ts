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
import AbstractPurchasingTransaction from "./AbstractPurchasingTransaction";

export default class PurchasingTransactionApprove extends AbstractPurchasingTransaction {

    public writeXml(xml: IaXmlWriter): void {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);

        xml.writeStartElement("approve");

        xml.writeStartElement("PODOCUMENT");

        xml.writeElement("DOCID", this.externalId);

        xml.writeElement("COMMENT", this.comment);

        xml.writeEndElement(); // PODOCUMENT

        xml.writeEndElement(); // approve

        xml.writeEndElement(); // function
    }
}