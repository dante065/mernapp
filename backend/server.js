import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMngoDB from "./db/connectToMongoDB.js";



const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();


app.use(express.json()); //to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()); //access the cookies values and details 

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);



// app.get("/", (req,res)=>{
//     // Root route http://localhost:5000/
//     res.send("Hello haha world");
// });




app.listen(PORT,() => {
    connectToMngoDB();
    console.log('server running on port',PORT)
});