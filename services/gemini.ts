
import { GoogleGenAI } from "@google/genai";

// Vercel and most modern hosts inject environment variables into process.env
const API_KEY = process.env.API_KEY;

export async function generateTeaser(text: string): Promise<string> {
  if (!API_KEY) {
    console.warn("Gemini API Key is missing. Please set API_KEY in your hosting environment variables.");
    return "Our premium agro-products ensure purity and health in every grain.";
  }

  try {
    // Correct initialization using named parameter object
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ 
        parts: [{ 
          text: `You are a professional marketing copywriter for Pinnaxa Industries. 
          Summarize the following product/company details into a high-converting, 
          engaging 20-word teaser for a website hero section: ${text}` 
        }] 
      }],
    });

    // Accessing .text property directly as per SDK guidelines
    return response.text?.trim() || "Quality assurance in every grain.";
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "Excellence and purity, delivered globally.";
  }
}
