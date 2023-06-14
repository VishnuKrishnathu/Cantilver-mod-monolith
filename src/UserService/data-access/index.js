const makeUsersDB = require('./user.db');

const User = require('../../shared/models/user.model');

const UserDB = makeUsersDB({ User });

module.exports = UserDB;