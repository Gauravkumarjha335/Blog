// import { type } from "express/lib/response";
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

    profilePicture : {
        type : String ,
        // default : "https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg",
    },



}, { timestamps: true });

const User = mongoose.model('User', userschema);

export default User;

// module.exports = User; 