import mongoose from "mongoose";


const connectDB  = async () : Promise<void> => {
    try {
        await mongoose.connect( process.env.MONGO_URI as string ).then(() => {
            console.log("Connected to DB");
        })
    } catch (error : Error | any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;