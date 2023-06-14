const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
        minlength: 2,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    college: {
        type: String,
    },
    current_year: {
        type: Number,
    },
    phone_number: {
        type: String,
        minlength: 10,
        maxlength: 10,
    },
    skills: {
        type: [String],
    },
    dream_companies: {
        type: [String],
    },
    target_role: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", userSchema);