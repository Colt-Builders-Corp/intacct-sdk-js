/**
 * @module Intacct/SDK/Xml
 */
export default class HttpClientHandler {
    options: any;
    constructor(options: any);
    postAsync(): Promise<[Response, string]>;
}
