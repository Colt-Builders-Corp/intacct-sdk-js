"use strict";
/**
 * @module Intacct/SDK/Credentials
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Endpoint_1 = require("./Endpoint");
const ProfileCredentialProvider_1 = require("./ProfileCredentialProvider");
class SenderCredentials {
    constructor(config) {
        let envProfileName = process.env[SenderCredentials.SENDER_PROFILE_ENV_NAME];
        if (envProfileName == null) {
            envProfileName = SenderCredentials.DEFAULT_SENDER_PROFILE;
        }
        if (config.profileName == null) {
            config.profileName = envProfileName;
        }
        if (config.senderId == null) {
            config.senderId = process.env[SenderCredentials.SENDER_ID_ENV_NAME];
        }
        if (config.senderPassword == null) {
            config.senderPassword = process.env[SenderCredentials.SENDER_PASSWORD_ENV_NAME];
        }
        if (config.senderId == null
            && config.senderPassword == null
            && config.profileName != null) {
            const profile = ProfileCredentialProvider_1.default.getSenderCredentials(config);
            if (profile.senderId != null) {
                config.senderId = profile.senderId;
            }
            if (profile.senderPassword != null) {
                config.senderPassword = profile.senderPassword;
            }
            if (config.endpointUrl == null) {
                // Only set the endpoint URL if it was never passed in to begin with
                config.endpointUrl = profile.endpointUrl;
            }
        }
        if (config.senderId == null) {
            throw new Error('Required Sender ID not supplied in config or env variable "' +
                SenderCredentials.SENDER_ID_ENV_NAME + '"');
        }
        if (config.senderPassword == null) {
            throw new Error('Required Sender Password not supplied in config or env variable "' +
                SenderCredentials.SENDER_PASSWORD_ENV_NAME + '"');
        }
        this.senderId = config.senderId;
        this.password = config.senderPassword;
        this.endpoint = new Endpoint_1.default(config);
    }
}
exports.default = SenderCredentials;
SenderCredentials.SENDER_PROFILE_ENV_NAME = "INTACCT_SENDER_PROFILE";
SenderCredentials.SENDER_ID_ENV_NAME = "INTACCT_SENDER_ID";
SenderCredentials.SENDER_PASSWORD_ENV_NAME = "INTACCT_SENDER_PASSWORD";
SenderCredentials.DEFAULT_SENDER_PROFILE = "default";
//# sourceMappingURL=SenderCredentials.js.map