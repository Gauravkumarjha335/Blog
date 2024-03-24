import express from 'express'
import mongoose from 'mongoose';
const PORT = 8000;

const app = express();

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
// Connect to MongoDB database

mongoose.connect("mongodb+srv://Gaurav:Gaurav@atlascluster.bfkgaz9.mongodb.net/Blog?retryWrites=true&w=majority&appName=AtlasCluster")
    .then(() => console.log('Connected to Database'))
// .catch((err) => console.error(err));
