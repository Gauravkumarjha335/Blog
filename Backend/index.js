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
app.use('/api/user' , userRoutes);
app.use('/api/auth' , authroutes);

