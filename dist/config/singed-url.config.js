"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlGeneratorModuleConfig = void 0;
function urlGeneratorModuleConfig() {
    return {
        secret: process.env.APP_KEY,
        appUrl: process.env.APP_URL,
    };
}
exports.urlGeneratorModuleConfig = urlGeneratorModuleConfig;
//# sourceMappingURL=singed-url.config.js.map