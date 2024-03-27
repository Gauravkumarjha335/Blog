import express from 'express'
import connectDB from './DB/Connection.js';
import userRoutes from './routes/userRoutes.js';
import authroutes from './Routes/Authroutes.js'

const PORT = 8000;
const app = express();

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
// Connect to MongoDB database

connectDB();
app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/auth', authroutes);

app.use((err, req, res, next) => {
    const statuscode = err.statuscode || 500;
    const message = err.statuscode || 'Internal Server Error';
    res.status(statuscode).json({
        success: false,
        statuscode,
        message
    })
})

