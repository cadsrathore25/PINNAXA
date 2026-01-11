
import { GoogleGenAI } from "@google/genai";

// Security check for production environments
// Use process.env.API_KEY directly as per guidelines
const API_KEY = process.env.API_KEY;

export async function generateTeaser(text: string): Promise<string> {
  if (!API_KEY) {
    console.warn("Gemini API Key is missing. Please set API_KEY in your environment variables.");
    return "AI feature is currently unavailable. Contact administrator.";
  }

  try {
    // Correct initialization with named parameter
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    // Using gemini-3-flash-preview for text summarization tasks
    // Fixed: calling generateContent directly on ai.models
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

    // Correct text extraction: response.text is a property, not a method
    return response.text?.trim() || "Quality assurance in every grain.";
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "Excellence and purity, delivered globally.";
  }
}
