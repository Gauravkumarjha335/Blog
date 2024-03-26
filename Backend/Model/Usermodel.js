import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username: {
        require: true,
        typeof: String,
        unique: true
    },
    email: {
        typeof: String,
        unique: true,
        required: [true, "Please provide an Email address"]
    },
    password: {
        type: String,
        require: [true, "Please Provide a Password"],
    },



}, { timestamps: true });

const User = mongoose.model( 'User', userschema );

module.exports = User; 