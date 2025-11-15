'use server';
/**
 * @fileOverview An AI assistant for answering questions about a sermon.
 *
 * - askAiAboutSermon - A function that handles the question answering process.
 * - AskAiAboutSermonInput - The input type for the askAiAboutSermon function.
 * - AskAiAboutSermonOutput - The return type for the askAiAboutSermon function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskAiAboutSermonInputSchema = z.object({
  sermonTranscript: z
    .string()
    .describe('The transcript of the sermon to ask questions about.'),
  question: z.string().describe('The question to ask about the sermon.'),
});
export type AskAiAboutSermonInput = z.infer<typeof AskAiAboutSermonInputSchema>;

const AskAiAboutSermonOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about the sermon.'),
});
export type AskAiAboutSermonOutput = z.infer<typeof AskAiAboutSermonOutputSchema>;

export async function askAiAboutSermon(input: AskAiAboutSermonInput): Promise<AskAiAboutSermonOutput> {
  return askAiAboutSermonFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askAiAboutSermonPrompt',
  input: {schema: AskAiAboutSermonInputSchema},
  output: {schema: AskAiAboutSermonOutputSchema},
  prompt: `You are a friendly and helpful AI assistant for the AIC Kimalel Saramek Church. Your purpose is to answer questions about a specific sermon with a joyful and encouraging tone, like a helpful member of the church community. 🙏

Use the provided sermon transcript as the primary source for your answers. If the question is about a topic not covered in the transcript, you can use your general knowledge but always maintain a warm, religious, and positive tone. Sprinkle in some relevant emojis to make your response more engaging! ✨

Sermon Transcript:
{{{sermonTranscript}}}

Question from a community member:
{{{question}}}

Provide a blessed and insightful answer:`,
});

const askAiAboutSermonFlow = ai.defineFlow(
  {
    name: 'askAiAboutSermonFlow',
    inputSchema: AskAiAboutSermonInputSchema,
    outputSchema: AskAiAboutSermonOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
