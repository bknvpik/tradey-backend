"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = require("nodemailer");
const sendMail = async (eMail, link) => {
    let transporter = nodemailer_1.default.createTransport({
        host: "smtp.sendgrid.net",
        port: 465,
        secure: false,
        auth: {
            user: process.env.SENGRID_USERNAME,
            pass: process.env.SENDGRID_API_KEY
        },
    });
    let info = await transporter.sendMail({
        from: '"tradey" <tradey@tradey.com>',
        to: eMail,
        subject: "tradey - activate your account",
        text: "Click the link provided below to activate your account",
        html: `<a href="${link}"><button>CONFIRM E-MAIL</button></a>`,
    });
    console.log("Message sent: %s", info.messageId);
};
exports.default = sendMail;
//# sourceMappingURL=send-mail.js.map