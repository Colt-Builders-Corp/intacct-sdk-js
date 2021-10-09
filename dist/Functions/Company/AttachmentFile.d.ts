/**
 * @module Intacct/SDK/Functions/Company
 */
import IaXmlWriter from "../../Xml/IaXmlWriter";
import IXmlObject from "../../Xml/IXmlObject";
export default class AttachmentFile implements IXmlObject {
    extension: string;
    fileName: string;
    private _filePath;
    get filePath(): string;
    set filePath(filePath: string);
    writeXml(xml: IaXmlWriter): void;
}
