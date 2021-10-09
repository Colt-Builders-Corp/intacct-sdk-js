/**
 * @module Intacct/SDK/Functions/DataDeliveryService
 */
import IaXmlWriter from "../../Xml/IaXmlWriter";
import AbstractFunction from "../AbstractFunction";
export default class DdsJobCreate extends AbstractFunction {
    objectName: string;
    cloudDeliveryName: string;
    jobType: string;
    timestamp: Date;
    delimiter: string;
    enclosure: string;
    includeHeaders: boolean;
    fileFormat: string;
    splitSize: number;
    compressed: boolean;
    writeXml(xml: IaXmlWriter): void;
}
