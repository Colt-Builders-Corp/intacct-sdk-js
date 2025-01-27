/**
 * @module Intacct/SDK/Xml
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
import { Response } from "node-fetch";
import { Logger } from "winston";
import MessageFormatter from "../Logging/MessageFormatter";
import HttpClientHandler from "./HttpClientHandler";
export default class LoggingHandler extends HttpClientHandler {
    private logger;
    private logMessageFormatter;
    private logLevel;
    constructor(options: any, logger: Logger, logMessageFormat: MessageFormatter, logLevel: string);
    postAsync(): Promise<[Response, string]>;
}
