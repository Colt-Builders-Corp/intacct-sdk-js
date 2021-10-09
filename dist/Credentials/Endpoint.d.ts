/**
 * @module Intacct/SDK/Credentials
 */
import ClientConfig from "../ClientConfig";
export default class Endpoint {
    static readonly DEFAULT_ENDPOINT = "https://api.intacct.com/ia/xml/xmlgw.phtml";
    static readonly ENDPOINT_URL_ENV_NAME = "INTACCT_ENDPOINT_URL";
    static readonly DOMAIN_NAME = "intacct.com";
    static readonly FULL_QUALIFIED_DOMAIN_NAME: string;
    private static isDomainValid;
    private _url;
    get url(): string;
    set url(address: string);
    constructor(config: ClientConfig);
}
