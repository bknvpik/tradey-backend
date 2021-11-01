"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("../redis");
const uuid_1 = require("uuid");
const confirmEmail = async (userId) => {
    const id = (0, uuid_1.v4)();
    await redis_1.default.set(id, userId, 'ex', 60 * 60 * 24);
    return `${process.env.APP_URL}/users/confirm/${id}`;
};
exports.default = confirmEmail;
//# sourceMappingURL=confirm-email.js.map