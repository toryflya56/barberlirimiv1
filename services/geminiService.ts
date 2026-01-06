import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getStyleAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert barber and men's style consultant. 
      The user will ask for advice on haircuts or beard styles.
      Keep your answer concise (under 100 words), professional, and stylish. 
      Focus on face shapes and hair textures if mentioned.
      
      User Query: ${userQuery}`,
    });

    return response.text || "I couldn't generate advice at this moment. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the style server right now.";
  }
};