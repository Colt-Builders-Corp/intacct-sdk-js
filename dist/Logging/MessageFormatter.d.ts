/**
 * @module Intacct/SDK/Logging
 */
export default class MessageFormatter {
    static readonly clf: string;
    static readonly debug: string;
    static readonly short: string;
    static maskSensitiveData(msg: any, meta: any): {
        msg: any;
        meta: any;
    };
    private static headers;
    private template;
    constructor(formatTemplate?: string);
    formatRequest(options: any, error?: Error): string;
    formatResponse(response: any, body: any, error?: Error): string;
}
