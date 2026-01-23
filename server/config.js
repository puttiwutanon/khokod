import dotenv from "dotenv";

dotenv.config();

export const ENV={
    GEMINI_API_KEY: process.env.GEMINI_API_KEY
}

console.log(ENV.GEMINI_API_KEY)