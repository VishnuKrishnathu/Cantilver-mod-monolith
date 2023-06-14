const mongoose = require("mongoose");

module.exports = {
    getId: () => new mongoose.Types.ObjectId(),
    validate: (id) => mongoose.isValidObjectId(id),
}