module.exports = function makeEmailTransport({ transporter }) {
    function sendEmail({ from, to, subject, html }) {
        const message = {
            from,
            to,
            subject,
            html,
        };

        return transporter.sendMail(message);
    }

    return Object.freeze({
        sendEmail,
    });
};
