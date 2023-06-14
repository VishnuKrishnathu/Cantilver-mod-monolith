const nodemailer = require("nodemailer");
const makeEmailTransport = require("./email-transport");

let transporter = nodemailer.createTransport({
    host: `${process.env.HOST}`,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: `${process.env.EMAIL}`, // generated ethereal user
        pass: `${process.env.PASS}`, // generated ethereal password
    },
    pool: true,
});

const emailTransport = makeEmailTransport({ transporter })

module.exports = emailTransport;
