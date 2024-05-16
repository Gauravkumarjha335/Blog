import mongoose from "mongoose";

const Blogschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        // required: true
    }
})

const Blog = mongoose.model('blog', Blogschema);

export default Blog;