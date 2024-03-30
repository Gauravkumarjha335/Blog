import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        maxlength: 20
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,

        require: [true, "Please Provide a Password"],
    },



}, { timestamps: true });

const User = mongoose.model('User', userschema);

export default User;

// module.exports = User; 