"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redis = require("ioredis");
const redis = new Redis({
    host: "127.0.0.1"
});
exports.default = redis;
//# sourceMappingURL=redis.js.map