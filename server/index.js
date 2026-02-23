import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";
import therapistRoutes from "./routes/therapistRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);
app.use("/api/therapists", therapistRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));