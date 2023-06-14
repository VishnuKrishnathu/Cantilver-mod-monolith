const { createUser } = require("../use-cases");
const makePostUser = require("./post-user");
const { createUser: sendEmail } = require("../../CommService/use-cases");
const handleError = require("../helpers/error-handler");

const postUser = makePostUser({ createUser, handleError, sendEmail });

module.exports = Object.freeze({
    postUser,
});
