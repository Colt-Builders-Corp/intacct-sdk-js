"use strict";
/**
 * @module Intacct/SDK/Credentials
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ProfileCredentialProvider_1 = require("./ProfileCredentialProvider");
class LoginCredentials {
    constructor(config, senderCreds) {
        let envProfileName = process.env[LoginCredentials.COMPANY_PROFILE_ENV_NAME];
        if (envProfileName == null) {
            envProfileName = LoginCredentials.DEFAULT_COMPANY_PROFILE;
        }
        if (config.profileName == null) {
            config.profileName = envProfileName;
        }
        if (config.companyId == null) {
            config.companyId = process.env[LoginCredentials.COMPANY_ID_ENV_NAME];
        }
        if (config.entityId == null) {
            config.entityId = process.env[LoginCredentials.ENTITY_ID_ENV_NAME];
        }
        if (config.userId == null) {
            config.userId = process.env[LoginCredentials.USER_ID_ENV_NAME];
        }
        if (config.userPassword == null) {
            config.userPassword = process.env[LoginCredentials.USER_PASSWORD_ENV_NAME];
        }
        if (config.companyId == null
            && config.userId == null
            && config.userPassword == null
            && config.profileName != null) {
            const profile = ProfileCredentialProvider_1.default.getLoginCredentials(config);
            if (profile.companyId != null) {
                config.companyId = profile.companyId;
            }
            if (profile.entityId != null) {
                config.entityId = profile.entityId;
            }
            if (profile.userId != null) {
                config.userId = profile.userId;
            }
            if (profile.userPassword != null) {
                config.userPassword = profile.userPassword;
            }
        }
        if (config.companyId == null) {
            throw new Error("Required Company ID not supplied in config or env variable \"" +
                LoginCredentials.COMPANY_ID_ENV_NAME + "\"");
        }
        // Entity ID is not required, no Error
        if (config.userId == null) {
            throw new Error("Required User ID not supplied in config or env variable \"" +
                LoginCredentials.USER_ID_ENV_NAME + "\"");
        }
        if (config.userPassword == null) {
            throw new Error("Required User Password not supplied in config or env variable \"" +
                LoginCredentials.USER_PASSWORD_ENV_NAME + "\"");
        }
        this.companyId = config.companyId;
        this.entityId = config.entityId;
        this.userId = config.userId;
        this.password = config.userPassword;
        this.senderCreds = senderCreds;
    }
    get endpoint() {
        return this.senderCreds.endpoint;
    }
}
exports.default = LoginCredentials;
LoginCredentials.COMPANY_PROFILE_ENV_NAME = "INTACCT_COMPANY_PROFILE";
LoginCredentials.COMPANY_ID_ENV_NAME = "INTACCT_COMPANY_ID";
LoginCredentials.ENTITY_ID_ENV_NAME = "INTACCT_ENTITY_ID";
LoginCredentials.USER_ID_ENV_NAME = "INTACCT_USER_ID";
LoginCredentials.USER_PASSWORD_ENV_NAME = "INTACCT_USER_PASSWORD";
LoginCredentials.DEFAULT_COMPANY_PROFILE = "default";
//# sourceMappingURL=LoginCredentials.js.map