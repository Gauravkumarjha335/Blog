import Blog from "../Model/Blogmodel.js";
import User from "../Model/Usermodel.js";
import { errorHandler } from "../Utills/Error.js";

export const blogcontroller = async (req, res) => {

    const { title, description, image } = req.body;

    if (!title || !description || !image) {
        return res.status(400).json({ error: "All fields are required" });
    }
   

    const newForm = new Blog({ title, description, image });

    try {
        const validblog = await User.findOne({title});

        if (!validblog) {
         return res.json({
            text : 'Tsi sis avald '
         })
        }

        await newForm.save();
        res.status(201).json({ message: 'Form data saved' });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ error: 'Failed to save form data' });
    }
};


    // app.use(bodyParser.json());