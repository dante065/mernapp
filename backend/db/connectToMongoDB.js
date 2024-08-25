import mongoose from 'mongoose';

const connectToMngoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to MONGODB");
    } catch (error) {
        console.log("Error connecting to MongDB", error.message)
    }


};

export default connectToMngoDB;