import Blog from "../Model/Blogmodel.js";

export const blogcontroller = async (req, res) => {

    const { title, description, image } = req.body;

    if (!title || !description || !image) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const newForm = new Blog({ title, description, image });

    try {
        await newForm.save();
        res.status(201).json({ message: 'Form data saved' });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ error: 'Failed to save form data' });
    }
};


    // app.use(bodyParser.json());