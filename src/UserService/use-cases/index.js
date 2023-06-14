const makeUser = require("../entities");
const UserDB = require("../data-access");
const makeCreateUser = require("./create-user");

const createUser = makeCreateUser({ UserDB, makeUser });

module.exports = Object.freeze({ createUser });
