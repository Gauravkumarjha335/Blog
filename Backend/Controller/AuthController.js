import User from '../Model/Usermodel.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../Utills/Error.js';
import jwt from 'jsonwebtoken';



// const dotenv = require('dotenv');
// dotenv.config();

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
        await newuser.save().then(()=>{
            alert("Account has been created");
        })
        res.json("Account has been created");
    } catch (error) {
        next(error);
    }

}




export const signin = async (req, res, next) => {

    // const JWT_SECRET = "gaurav";
    const { email, password } = req.body;

    if (!email || !password || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'));
    }

    try {
        const validUser = await User.findOne({ email });

        if (!validUser) {
            return next(errorHandler(404, 'User not found'));
        }

          const validPassword = bcryptjs.compareSync(password, validUser.password);

          if (!validPassword) {
            return next(errorHandler(400, 'Invalid password'));
          }

          const token = jwt.sign(
            { id: validUser._id },
            process.env.JWT_SECRET
          );

          const { password: pass, ...rest } = validUser._doc;

          res
            .status(200)
            .cookie('access_token', token, {
              httpOnly: true,
            })
            .json(rest);

    } catch (error) {
        res.json("Bkkk")
        //   next(error);
    }
};