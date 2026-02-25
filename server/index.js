import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";
import therapistRoutes from "./routes/therapistRoutes.js";
import moodRoutes from "./routes/moodRoutes.js";
import medicationRoutes from "./routes/medAlertRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);
app.use("/api/therapists", therapistRoutes);
app.use("/api/moods", moodRoutes);
app.use("/api/medications", medicationRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));