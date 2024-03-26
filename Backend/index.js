import express from 'express'
import connectDB from './DB/Connection.js';
const PORT = 8000;
const app = express();

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
// Connect to MongoDB database

connectDB();