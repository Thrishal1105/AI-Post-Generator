import { GoogleGenAI, Type } from "@google/genai";
import type { GeneratedPosts } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const postsSchema = {
  type: Type.OBJECT,
  properties: {
    linkedin: {
      type: Type.STRING,
      description: "A professional LinkedIn post about the topic, including relevant hashtags. Should be engaging and informative.",
    },
    twitter: {
      type: Type.STRING,
      description: "A short, catchy Twitter (X) post (under 280 characters) about the topic, using trending or relevant hashtags.",
    },
    instagram: {
      type: Type.STRING,
      description: "A casual and engaging Instagram caption for the topic. Should include emojis and relevant hashtags.",
    },
  },
  required: ["linkedin", "twitter", "instagram"],
};

export const generateSocialPosts = async (topic: string, tone: string): Promise<GeneratedPosts> => {
  try {
    const prompt = `You are an expert social media manager. Your task is to generate posts for LinkedIn, Twitter (X), and Instagram based on the following topic: "${topic}". The posts should have a ${tone} tone. Please adhere to the format suitable for each platform.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: postsSchema,
      },
    });
    
    const text = response.text.trim();
    const parsedJson = JSON.parse(text);

    if (
      !parsedJson.linkedin ||
      !parsedJson.twitter ||
      !parsedJson.instagram
    ) {
      throw new Error("AI response is missing one or more required post fields.");
    }

    return parsedJson as GeneratedPosts;
  } catch (error) {
    console.error("Error generating social posts:", error);
    throw new Error("Failed to generate text content from AI.");
  }
};

export const generatePostImage = async (topic: string, tone: string): Promise<string> => {
  try {
    const imagePrompt = `A visually stunning, high-quality digital art illustration for a social media post about "${topic}". The image should have a ${tone} mood, be vibrant, and directly relevant to the theme. It needs to be eye-catching to stop users from scrolling. Avoid text.`;

    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: imagePrompt,
      config: {
        numberOfImages: 1,
        aspectRatio: "1:1", // Square format is versatile
        outputMimeType: 'image/png'
      },
    });
    
    if (!response.generatedImages || response.generatedImages.length === 0) {
      throw new Error("AI did not return any images.");
    }
    
    const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
    return `data:image/png;base64,${base64ImageBytes}`;

  } catch (error) {
    console.error("Error generating image:", error);
    throw new Error("Failed to generate image from AI.");
  }
};
