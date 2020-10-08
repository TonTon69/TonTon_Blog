const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        avatar: { type: String, required: false },
        gender: { type: String, required: false },
        birthday: { type: String, required: false },
        role: { type: Number, default: 0 },
    },
    { timestamps: true },
);
module.exports = mongoose.model('User', User);
