"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
const IntacctException_1 = require("../../Exceptions/IntacctException");
const AbstractFunction_1 = require("../AbstractFunction");
class AbstractApPaymentFunction extends AbstractFunction_1.default {
    constructor(recordNo, controlId) {
        super(controlId);
        this.recordNo = recordNo;
    }
    writeXml(xml) {
        switch (this.getFunction()) {
            case AbstractApPaymentFunction.DELETE:
                this.writeCrudXml(xml);
                break;
            case AbstractApPaymentFunction.DECLINE:
            case AbstractApPaymentFunction.CONFIRM:
            case AbstractApPaymentFunction.APPROVE:
            case AbstractApPaymentFunction.SEND:
            case AbstractApPaymentFunction.VOID:
                this.writeLegacyXml(xml);
                break;
            default:
                throw new IntacctException_1.default("Cannot write XML for ApPaymentFunction " + this.getFunction());
        }
    }
    writeCrudXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement(this.getFunction());
        xml.writeElement("object", "APPYMT");
        xml.writeElement("keys", this.recordNo);
        xml.writeEndElement(); // delete
        xml.writeEndElement(); // function
    }
    writeLegacyXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement(this.getFunction());
        xml.writeStartElement("appaymentkeys");
        xml.writeElement("appaymentkey", this.recordNo, true);
        xml.writeEndElement(); // appaymentkeys
        xml.writeEndElement(); // GetFunction
        xml.writeEndElement(); // function
    }
}
exports.default = AbstractApPaymentFunction;
AbstractApPaymentFunction.DELETE = "delete";
AbstractApPaymentFunction.DECLINE = "decline_appaymentrequest";
AbstractApPaymentFunction.CONFIRM = "confirm_appaymentrequest";
AbstractApPaymentFunction.APPROVE = "approve_appaymentrequest";
AbstractApPaymentFunction.SEND = "send_appaymentrequest";
AbstractApPaymentFunction.VOID = "void_appaymentrequest";
//# sourceMappingURL=AbstractApPaymentFunction.js.map