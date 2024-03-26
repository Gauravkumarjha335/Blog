import mongoose from 'mongoose';

async function connectDB() {
    try {

        mongoose.connect("mongodb+srv://Gaurav:Gaurav@atlascluster.bfkgaz9.mongodb.net/Blog?retryWrites=true&w=majority&appName=AtlasCluster")
            .then(() => console.log('Connected to Database'))
        // .catch((err) => console.error(err));
    } catch {
        console.error(err);
    }
}
export default  connectDB;