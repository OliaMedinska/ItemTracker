import mongoose from "mongoose"

export const connecctDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);        
    } catch (error) {
        console.error(`Errror: ${error.mongoose}`);
        process.exit(1);
    }
}