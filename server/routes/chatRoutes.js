import express from "express";
import { askGemini } from "./ML_models/geminiClient.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("REQ BODY:", req.body);
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Missing question" });
  }

  const answer = await askGemini(question);

  res.json({ question, answer });
});

export default router;