const buildMakeUser = require("./make-user");
const Id = require("../../shared/Id");
const bcrypt = require("bcrypt");

const hashPassword = (password) => {
    return bcrypt.hash(password, 10);
}

const makeUser = buildMakeUser({ Id, hashPassword });

module.exports = makeUser;