"use strict";
/**
 * @module Intacct/SDK/Functions/OrderEntry
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFunction_1 = require("../AbstractFunction");
class AbstractOrderEntryTransaction extends AbstractFunction_1.default {
    constructor() {
        super(...arguments);
        this.customFields = [];
    }
    writeXmlMultiCurrencySection(xml) {
        xml.writeElement("basecurr", this.baseCurrency);
        xml.writeElement("currency", this.transactionCurrency);
        if (this.exchangeRateDate != null) {
            xml.writeStartElement("exchratedate");
            xml.writeDateSplitElements(this.exchangeRateDate);
            xml.writeEndElement(); // exchratedate
        }
        if (this.exchangeRateType != null) {
            xml.writeElement("exchratetype", this.exchangeRateType);
        }
        else if (this.exchangeRateValue != null) {
            xml.writeElement("exchrate", this.exchangeRateValue);
        }
        else if (this.baseCurrency != null || this.transactionCurrency != null) {
            xml.writeElement("exchratetype", this.exchangeRateType, true);
        }
    }
}
exports.default = AbstractOrderEntryTransaction;
//# sourceMappingURL=AbstractOrderEntryTransaction.js.map