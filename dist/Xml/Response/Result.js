"use strict";
/**
 * @module Intacct/SDK/Xml/Response
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
const util_1 = require("util");
const IntacctException_1 = require("../../Exceptions/IntacctException");
const ResultException_1 = require("../../Exceptions/ResultException");
const ErrorMessage_1 = require("./ErrorMessage");
class Result {
    constructor(result) {
        if (!result.hasOwnProperty("status")) {
            throw new IntacctException_1.default("Response result block is missing status element");
        }
        this._status = result["status"];
        if (!result.hasOwnProperty("function")) {
            throw new IntacctException_1.default("Response result block is missing function element");
        }
        this._functionName = result["function"];
        if (!result.hasOwnProperty("controlid")) {
            throw new IntacctException_1.default("Response result block is missing controlid element");
        }
        this._controlId = result["controlid"];
        if (result["status"] !== "success") {
            if (result.hasOwnProperty("errormessage")) {
                const errorMessage = new ErrorMessage_1.default(result["errormessage"]);
                this._errors = errorMessage.errors;
            }
        }
        else {
            if (result.hasOwnProperty("key") && result["key"] != null) {
                this._key = result["key"].toString();
            }
            else if (result.hasOwnProperty("listtype") && result["listtype"] != null) {
                const listType = result["listtype"];
                this._listType = result["listtype"].toString();
                if (listType.hasOwnProperty(["$"])) {
                    const listTypeAttr = listType["$"];
                    if (listTypeAttr.hasOwnProperty("total")) {
                        this._totalCount = parseInt(listTypeAttr["total"], 10);
                    }
                    if (listTypeAttr.hasOwnProperty("start")) {
                        this._start = parseInt(listTypeAttr["start"], 10);
                    }
                    if (listTypeAttr.hasOwnProperty("end")) {
                        this._end = parseInt(listTypeAttr["end"], 10);
                    }
                }
            }
            else if (result.hasOwnProperty("data")
                && result["data"].hasOwnProperty("$")
                && result["data"]["$"].hasOwnProperty("listtype")
                && result["data"]["$"]["listtype"] != null) {
                const dataAttr = result["data"]["$"];
                if (dataAttr.hasOwnProperty("listtype")) {
                    this._listType = dataAttr["listtype"].toString();
                }
                if (dataAttr.hasOwnProperty("totalcount")) {
                    this._totalCount = parseInt(dataAttr["totalcount"], 10);
                }
                if (dataAttr.hasOwnProperty("count")) {
                    this._count = parseInt(dataAttr["count"], 10);
                }
                if (dataAttr.hasOwnProperty("numremaining")) {
                    this._numRemaining = parseInt(dataAttr["numremaining"], 10);
                }
                if (dataAttr.hasOwnProperty("resultId")) {
                    this._resultId = dataAttr["resultId"].toString();
                }
            }
            if (result.hasOwnProperty("data")) {
                const data = [];
                for (const key in result["data"]) {
                    if (key !== "$" && result["data"].hasOwnProperty(key)) {
                        if (util_1.isArray(result["data"][key])) {
                            for (const child of result["data"][key]) {
                                data.push(child);
                            }
                        }
                        else {
                            data.push(result["data"][key]);
                        }
                    }
                }
                this._data = data;
            }
        }
    }
    get status() {
        return this._status;
    }
    get functionName() {
        return this._functionName;
    }
    get controlId() {
        return this._controlId;
    }
    get data() {
        return this._data;
    }
    get listType() {
        return this._listType;
    }
    get count() {
        return this._count;
    }
    get totalCount() {
        return this._totalCount;
    }
    get numRemaining() {
        return this._numRemaining;
    }
    get resultId() {
        return this._resultId;
    }
    get key() {
        return this._key;
    }
    get start() {
        return this._start;
    }
    get end() {
        return this._end;
    }
    get errors() {
        return this._errors;
    }
    ensureStatusSuccess() {
        if (this.status !== "success") {
            throw new ResultException_1.default("Result status: " + this.status + " for Control ID: " + this.controlId, this._errors);
        }
    }
    ensureStatusNotFailure() {
        if (this.status === "failure") {
            throw new ResultException_1.default("Result status: " + this.status + " for Control ID: " + this.controlId, this._errors);
        }
    }
}
exports.default = Result;
//# sourceMappingURL=Result.js.map