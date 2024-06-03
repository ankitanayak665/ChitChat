import express from "express";
import userRoute from "./routes/user.js";
const app = express();
import dotenv from "dotenv";
import { connectDB } from "./utils/features.js";

dotenv.config({
    path:"./.env"
})
const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 3000;


connectDB(mongoUri);

app.use(express.json());

app.use("/user",userRoute)
app.use("/",userRoute)


app.listen(port,()=>{
    console.log("Server created successfully");
})