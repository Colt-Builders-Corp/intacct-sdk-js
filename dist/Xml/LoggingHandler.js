"use strict";
/**
 * @module Intacct/SDK/Xml
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpClientHandler_1 = require("./HttpClientHandler");
class LoggingHandler extends HttpClientHandler_1.default {
    constructor(options, logger, logMessageFormat, logLevel) {
        super(options);
        this.logger = logger;
        this.logMessageFormatter = logMessageFormat;
        this.logLevel = logLevel;
    }
    postAsync() {
        const _super = Object.create(null, {
            postAsync: { get: () => super.postAsync }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.logger.log(this.logLevel, this.logMessageFormatter.formatRequest(this.options));
                return yield _super.postAsync.call(this).then(([response, body]) => {
                    this.logger.log(this.logLevel, this.logMessageFormatter.formatResponse(response, body));
                    return Promise.all([response, body]);
                });
            }
            catch (error) {
                this.logger.log(this.logLevel, error);
                throw error;
            }
        });
    }
}
exports.default = LoggingHandler;
//# sourceMappingURL=LoggingHandler.js.map