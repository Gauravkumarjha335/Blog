import mongoose from 'mongoose';
async function connectDB() {
    try {

        mongoose.connect(process.env.MONGO_URL)
            .then(() => console.log('Connected to Database'))

    } catch {
        console.error(err);
    }
}
export default  connectDB;