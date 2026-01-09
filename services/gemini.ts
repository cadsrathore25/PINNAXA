import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function generateTeaser(text: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a professional, short, and engaging teaser (about 20 words) for an agro-export website from the following text: ${text}`,
    });
    return response.text?.trim() || "Unable to generate summary.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating summary. Please check your API key.";
  }
}