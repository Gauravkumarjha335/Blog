import express from 'express'
import connectDB from './DB/Connection.js';
import userRoutes from './routes/userRoutes.js';
import authroutes from './Routes/Authroutes.js'
import blogRoutes from './Routes/BlogRoutes.js'
import dotenv from 'dotenv';
dotenv.config();
const app = express();


app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT}`));
// Connect to MongoDB database


connectDB();


app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/auth', authroutes);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});


