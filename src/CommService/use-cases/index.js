const emailTransport = require("../helpers/email-service");
const makeCreateUser = require("./user-create");

const createUser = makeCreateUser({ transport: emailTransport });

module.exports = Object.freeze({
    createUser,
});
