import User from '../Model/Usermodel.js'
import bcryptjs from 'bcryptjs'


export const Signup = async (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email || username === '' || password === '', email === '') {
        return res.status(400).json({ message: "All filled are required " })

    }

    const hashedpassword = bcryptjs.hashSync(password, 10);

    const newuser = new User({
        username,
        email,
        password : hashedpassword,
    });

    await newuser.save()
    res.json("Account has been created");
}