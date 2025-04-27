import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"
import dotenv from 'dotenv';
dotenv.config()

const databaseConnection = async ()=>{
    try {
        const dbconnection=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongodb connected at ${dbconnection.connection.host}` )
    } catch (error) {
        console.error("ERROR:",error)
    }
}

export default databaseConnection;


