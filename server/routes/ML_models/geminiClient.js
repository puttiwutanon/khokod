import { GoogleGenerativeAI } from "@google/generative-ai";
import { KHORKOD_SYSTEM_INSTRUCTION } from "./systemInstructions.js";
import { ENV } from "../../config.js";

console.log("apikey: ", ENV.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(ENV.GEMINI_API_KEY); 

export async function askGemini(prompt) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: KHORKOD_SYSTEM_INSTRUCTION, 
    });

    const result = await model.generateContent(prompt);
    const response = result.response.text(); 

    return response;

  } catch (err) {
    console.error("Gemini Error:", err);
    return "Error contacting AI.";
  }
}