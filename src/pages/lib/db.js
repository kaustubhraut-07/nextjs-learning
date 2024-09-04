import mongoose from "mongoose";


// const uri = process.env.MONGO_URI;
// console.log(uri, "123");
export default async function db(req, res) {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb connected");
    }catch(error){

        // res.status(500).json({error: error.message})
        console.log(error);

    }
};