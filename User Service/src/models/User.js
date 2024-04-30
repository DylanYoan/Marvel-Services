const { Schema, model } = require("mongoose");

const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
    email: { type: String, required: false, unique: false },
    password: { type: String, required: false },

    date: { type: Date, default: Date.now },
});

UserSchema.methods.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(13);
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = model("User", UserSchema);