import express from "express";
import dotenv from "dotenv";
dotenv.config();


console.log("Loaded key:", process.env.GEMINI_API_KEY);  

import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/chat", chatRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
