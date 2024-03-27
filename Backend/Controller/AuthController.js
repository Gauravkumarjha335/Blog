import User from '../Model/Usermodel.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../Utills/Error.js';


export const Signup = async (req, res, next) => {

    const { username, email, password } = req.body;

    if (!username || !password || !email || username === '' || password === '', email === '') {
        next(errorHandler(400, 'All filedes are required'))
    }

    const hashedpassword = bcryptjs.hashSync(password, 10);

    const newuser = new User({
        username,
        email,
        password: hashedpassword,
    });

    try {
        await newuser.save()
        res.json("Account has been created");
    } catch (error) {
        next(error);
    }

}